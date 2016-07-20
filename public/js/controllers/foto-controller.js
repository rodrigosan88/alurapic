angular.module('alurapic').controller('FotoController', function($scope, $http){
    $scope.foto = {};
    
    $scope.salvar = function(){
        console.log($scope.foto);
        $http.post('/v1/fotos', $scope.foto)
            .success(function(){
                console.log('OK');
            })
            .error(function(erro){
                console.log(erro);
            });
    };
    
    $scope.submeter = function (){
        if($scope.formulario.$valid){
            $http.post('/v1/fotos', $scope.foto)
                .success(function(){
                    $scope.mensagem  = 'OK';
                    console.log('OK');
                })
                .error(function(erro){
                    $scope.mensagem  = erro;
                    console.log(erro);
                });        
        }
    };
    
});