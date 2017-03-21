
 angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state, Login) {
  $scope.email = '';
  $scope.senha = '';

  $scope.continuar = function() {
 $state.go("clinicasehospitais");
  }

  $scope.novoCadastro = function(email, senha) {
    Login.novo(email, senha, function(erro) {
      alert(erro);
    });
  }
})

.controller('clinicasehospitaisCtrl', function($scope, $state, Tarefas) {

  $scope.informacoes = function() {
   $state.go("informacoes");
  }
})

function converterObjParaArray (obj) {
  var array = [];
  for (var key in obj) {
    obj[key].id = key;
    array.push(obj[key]);
  }
  return array;
}
