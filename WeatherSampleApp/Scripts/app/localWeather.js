define(['jquery', 'jsHelper','knockout', 'knockoutMapping'],
    function ($, jshelper, ko, knockoutMapping) {
        ko.mapping = knockoutMapping;

        function getWeatherFromCoords(position, deferred) {
            var coords = position.coords.latitude + ',' + position.coords.longitude;
            $.getJSON('https://api.forecast.io/forecast/<apikeyhere>/' + coords + '?callback=?', function (data) {
                viewModel.weather(ko.mapping.fromJS(data));
                deferred.resolve();
            }).error(function(xhr, errorType, exception) {
                        jsHelper.errorHelper(xhr, errorType, exception, baseUrl);
                    });
        }

        function getWeatherForCurrentLocation(deferred) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    getWeatherFromCoords(position, deferred);
                });
            } else {
                alert('Geolocation is not supported by this browser.');
            }
        }

        return {
            getWeatherForCurrentLocation: getWeatherForCurrentLocation
        }
    });