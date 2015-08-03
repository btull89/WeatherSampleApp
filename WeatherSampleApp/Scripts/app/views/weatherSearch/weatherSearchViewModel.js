define(['knockout', 'jquery', 'knockoutMapping', 'app/zipWeather'],
    function (ko, $, knockoutMapping, zipWeather) {
        ko.mapping = knockoutMapping;

        /*KnockoutJS ViewModel*/
        return function homeViewModel() {
            var self = this;
            self.zipcode = ko.observable();
            self.weather = ko.observableArray();
            self.coords = ko.observable();
            self.loading = ko.observable(true);

            self.getWeather = function () {
                $.when(zipWeather.getWeatherForZip(self.zipcode()))
                    .then(function () {
                        return zipWeather.getWeatherFromCoords(self.coords());
                    })
                    .then(function () {
                        self.loading(false);
                    });
            };

            self.getDateByOffset = function (offset) {
                var myDate = new Date();
                myDate.setDate(myDate.getDate() + offset);
                return myDate.toLocaleDateString();
            };
        };
    });
