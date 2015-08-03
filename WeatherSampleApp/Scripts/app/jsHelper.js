define(function () {

    var errorHelper = function (xhr, errorType, exception, urlForRedirect) {
        if (xhr.status === 500) {
            document.body.innerHTML = xhr.responseText;
        } else {
            var errorMessage = exception || xhr.statusText;
            alert('Request failed. Try refreshing the page.\n' + errorMessage);
        }

    };

    return {
        errorHelper: errorHelper
    };
});