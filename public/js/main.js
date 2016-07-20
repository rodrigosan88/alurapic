// Modulo principal da aplicação
angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'meusFiltros', 'ngRoute'])
    .config(function($routeProvider, $locationProvider){
    
        $locationProvider.html5Mode(true);
        $routeProvider.when('/fotos', 
                            {templateUrl: 'partials/principal.html',
                             controller: 'FotosController'
                            }
        );
    
        $routeProvider.when('/nova',{
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });
    
        $routeProvider.otherwise({redirectTo: '/fotos'});
});