requirejs.config({
    'baseUrl': '/Scripts/',
    'urlArgs': 'bust=v1.0',
    'paths': {
        'app': './app',
        'lib': './lib',
        'home': './app/views/home',
        'weatherSearch': './app/views/weatherSearch',
        'jquery': 'lib/jquery-2.1.4.min',
        'bootstrap': 'lib/bootstrap',
        'respond': 'lib/respond.min',
        'knockout': 'lib/knockout-3.3.0',
        'knockoutMapping': 'lib/knockout-mapping-2.4.1',
        'jsHelper': 'app/jsHelper'
    },
    'shim': {
        'bootstrap': ['jquery', 'respond']
    }
});