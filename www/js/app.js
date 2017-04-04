     angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
   
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
 
      StatusBar.styleDefault();
    }
 
  })
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
        url: '/login',
        views:{
        'view-inicial': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }
    }
  })


  .state('clinicasehospitais', {
    url: '/clinicasehospitais',
    views:{
      'view-inicial': {
        templateUrl: 'templates/clinicasehospitais.html',
         controller: "clinicasehospitaisCtrl"
      }
    }
  })
.state('info', {
    url: '/info/:clinica',
    views:{
      'view-inicial': {
        templateUrl: 'templates/info.html',
        controller: "informacoesCtrl"
      }
    }
  })
  .state('especialidades', {
    url: '/especialidades/:clinica',
    views:{
      'view-inicial': {
        templateUrl: 'templates/especialidades.html',
        controller: "especialidadesCtrl"
      }
    }
  })
  .state('cadastro', {
    url: '/cadastro',
    views:{
      'view-inicial': {
        templateUrl: 'templates/cadastroclinicas.html',
        controller: "CadastroCtrl"
      }
    }
  })


  $urlRouterProvider.otherwise('/login');
})
