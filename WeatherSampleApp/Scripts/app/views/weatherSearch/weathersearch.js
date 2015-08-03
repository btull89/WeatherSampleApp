require(['jquery', 'knockout', 'weatherSearch/weatherSearchViewModel', 'bootstrap'],
        function ($, ko, weatherSearchViewModel) {

            /*Bind ViewModel to View*/
            window.viewModel = new weatherSearchViewModel();
            ko.applyBindings(viewModel);
        });