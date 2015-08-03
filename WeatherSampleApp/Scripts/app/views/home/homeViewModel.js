define(['knockout', 'jquery', 'knockoutMapping', 'app/localWeather'],
    function(ko, $, knockoutMapping, localWeather) {
        ko.mapping = knockoutMapping;

        /*KnockoutJS ViewModel*/
        return function homeViewModel() {
            var self = this;
            self.weather = ko.observableArray();
            self.loading = ko.observable(true);

            self.getDateByOffset = function (offset) {
                var myDate = new Date();
                myDate.setDate(myDate.getDate() + offset);
                return myDate.toLocaleDateString(); 
            };

            var deferred = $.Deferred();
            $.when(deferred).then(function () {
                        self.loading(false);
            });

            localWeather.getWeatherForCurrentLocation(deferred);
        };
});
