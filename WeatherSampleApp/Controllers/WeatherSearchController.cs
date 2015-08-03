using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WeatherSampleApp.Controllers
{
    public class WeatherSearchController : Controller
    {
        // GET: WeatherSearch
        public ActionResult Index()
        {
            return View();
        }
    }
}