require(['jquery', 'knockout', 'home/homeViewModel', 'bootstrap'],
        function ($, ko, homeViewModel) {

            /*Bind ViewModel to View*/
            window.viewModel = new homeViewModel();
            ko.applyBindings(viewModel);
            
        });