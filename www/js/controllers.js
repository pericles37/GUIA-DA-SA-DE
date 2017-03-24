
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

  $scope.clinicas = [
    'Femina',
    'Santa Rosa',
    'São Matheus'
  ]

  $scope.informacoes = function() {
   $state.go("informacoes");
  }
})
.controller('informacoesCtrl', function($scope, $stateParams, Tarefas) {


  var feminaInfo = {
    telefone: '3025-2525',
    endereco: 'Rua Corumbá, 538 - Baú, cuiabá - MT, 78008-40'
  };

  var santaRosaInfo = {
    telefone: '3025-2525',
    endereco: 'Rua Adel maluf, 119 - jardim mariana, cuiabá - MT, 78015-200'
  }
  var SaoMatheusInfo = {
    telefone: '3025-2525',
    endereco: 'Av. aclimação , 335 - Bosque da saúde, cuiabá - MT, 78050-040'
  }

  $scope.informacoes = {}

  if ($stateParams.clinica === 'Femina') {
    $scope.informacoes = feminaInfo;
  } else if ($stateParams.clinica === 'Santa Rosa') {
    $scope.informacoes = santaRosaInfo;
  }else if ($stateParams.clinica === 'São Matheus') {
    $scope.informacoes = SaoMatheusInfo;
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
  