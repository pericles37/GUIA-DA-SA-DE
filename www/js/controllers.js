angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope) {
  $scope.email="";
  $scope.senha="";
  $scope.fazerLogin = function(email, senha){
     alert(email + senha);
  }
  $scope.novoCadastro = function(email, senha){
    alert(email + ' - ' + senha);
  }
})

.controller('tarefasCtrl', function($scope){
  $scope.terfas =[
    {
       nome: 'tarefa 01 '  
    },
    {
       nome: 'tarefa 02'
    }
  ];
})