define(['jquery', 'jsHelper', 'knockout', 'knockoutMapping'],
    function($, jshelper, ko, knockoutMapping) {
        ko.mapping = knockoutMapping;

        function getWeatherFromCoords(coords) {
            return $.getJSON('https://api.forecast.io/forecast/<apikeyhere>/' + coords + '?callback=?', function (data) {
                viewModel.weather(ko.mapping.fromJS(data));
            }).error(function(xhr, errorType, exception) {
                jsHelper.errorHelper(xhr, errorType, exception, baseUrl);
            });
        }

        function getWeatherForZip(zipcode) {
            return $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address=' + zipcode, function(data) {
                var latitude = data.results[0].geometry.location.lat;
                var longitude = data.results[0].geometry.location.lng;
                var coords = latitude + ',' + longitude;
                viewModel.coords(coords);
            }).error(function(xhr, errorType, exception) {
                jsHelper.errorHelper(xhr, errorType, exception, baseUrl);
            });
        }

        return {
            getWeatherForZip: getWeatherForZip,
            getWeatherFromCoords: getWeatherFromCoords
        };
    });