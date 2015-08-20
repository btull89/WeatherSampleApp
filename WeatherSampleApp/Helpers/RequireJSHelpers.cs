using System.IO;
using System.Text;
using System.Web.Mvc;

namespace WeatherSampleApp.Helpers
{
    public static class RequireJsHelpers
    {
        public static MvcHtmlString RequireJs(this HtmlHelper helper, string config, string module)
        {
            var require = new StringBuilder();

            // ReSharper disable once RedundantAssignment
            var jsLocation = "";
#if DEBUG
            jsLocation = "/Scripts/";
#else
            jsLocation = "/Scripts/app-built/";
#endif
            const string appLocation = "app/";


            if (File.Exists(helper.ViewContext.HttpContext.Server.MapPath(Path.Combine(jsLocation + appLocation, module + ".js"))))
            {
                require.AppendLine("require( [ \"" + jsLocation + config + "\" ], function() {");
                require.AppendLine("    require( [ \"" + appLocation + module + "\"] );");
                require.AppendLine("});");
            }

            return new MvcHtmlString(require.ToString());
        }

        public static MvcHtmlString ViewSpecificRequireJs(this HtmlHelper helper)
        {
            var controller = helper.ViewContext.RouteData.Values["controller"].ToString();
            controller = char.ToLower(controller[0]) + controller.Substring(1);

            return helper.RequireJs("common.js", string.Format("views/{0}/{1}", controller, controller));
        }
    }
}