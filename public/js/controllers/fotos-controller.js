/*
angular
    .module('alurapic')
    .controller('FotosController', function($scope) {
        $scope.fotos = [
            {titulo: 'Leão',
            url : 'http://fundosanimais.com/Minis/leoes.jpg'},
            {titulo: 'outro',
             url: 'http://fundosanimais.com/Minis/leoes.jpg'}
        
        ];
    });
*/
/*
angular
    .module('alurapic')
    .controller('FotosController', function($scope, $http){
        $scope.fotos = [];
        var promise = $http.get('/v1/fotos');
    
        promise.then(function(retorno){
            $scope.fotos = retorno.data;
        });
    
        promise.catch(function(erro){
            console.error(erro);
        });
    });
*/
angular
    .module('alurapic')
    .controller ('FotosController', function ($scope, $http){
        $scope.fotos = [];
        $http.get('/v1/fotos').success (
            function (data){
                $scope.fotos = data;
            }).error(
            function (erro){
                console.log(erro);
            });    
    });