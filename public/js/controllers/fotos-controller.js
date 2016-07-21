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
    .controller ('FotosController', function ($scope, $resource){
        var recursoFoto = $resource('/v1/fotos/:fotoId');
    
        $scope.fotos = [];
        $scope.filtro = '';
        $scope.mensagem = '';
    
        recursoFoto.query(function(fotos){
            $scope.fotos = fotos;
        }, function(erro){
            console.log(erro);
        });
 /*   
        $http.get('/v1/fotos').success (
            function (data){
                $scope.fotos = data;
            }).error(
            function (erro){
                console.log(erro);
            });*/
        /*
        $scope.remover = function (foto) {
            $http.delete('/v1/fotos/' + foto._id)
            .success( function(){
                var ind = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(ind, 1);
                console.log('Foto ' + foto.titulo + ' removida');
                $scope.mensagem = 'Foto ' + foto.titulo + ' removida';
            })
            .error( function(erro){
                console.log('Não foi posível apagar a foto ' + foto.titulo);
                $scope.mensagem = 'Não foi posível apagar a foto ' + foto.titulo;
            });
        };*/
    
        $scope.remover = function(foto){
            recursoFoto.delete({fotoId: foto._id}, function(){
                var indiceDaFoto = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indiceDaFoto,1);
                $scope.mensagem = 'Foto excluída';
            }, function(erro){
                console.log(erro);
                $scope.mensagem = 'Erro';
            });
        };
        
    });