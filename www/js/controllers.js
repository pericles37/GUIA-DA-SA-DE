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
.controller('informacoesCtrl', function($scope, $stateParams, $state, Tarefas) {

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
  } else if ($stateParams.clinica === 'São Matheus') {
    $scope.informacoes = SaoMatheusInfo;
  }
    $scope.especialidades = function() {
      $state.go("especialidades", {clinica: $stateParams.clinica});
    }

})
.controller('especialidadesCtrl', function($scope, $stateParams, Tarefas) {


  var feminaespecialidades = [
 'Cardiologia',	 
 'Clínica Geral',	
 'Coloproctologia',	
 'Dermatologia',	 
 'Endocrinologia',	 	
 'Fisioterapia',	
 'Fonoaudiologia',	 	 
 'Geriatria',	
 'Ginecologia',	 
 'Hematologia',	 
 'Homeopatia',	 
 'Infectologia',
 'Nefrologia',	
 'Neurologia',	 
 'Nutrição',	 
 'Nutrologia',		 
 'Oftalmologia',	 
 'Oncologia',	 
 'Ortopedia e Traumatologia',	
 'Otorrinolaringologia',
 'Pediatria	',
 'Pneumologia',	 
 'Psicologia',
 'Psicopedagogia',	 
 'Psiquiatria',
 'Reumatologia',	 
 'Urologia'	
  ];
   
    var Santarosaespecialidades = [ 
 'Cardiologia',	 
 'Clínica Geral',	
 'Coloproctologia',	
 'Dermatologia',	 
 'Endocrinologia',	 	
 'Fisioterapia',	
 'Fonoaudiologia',	 	 
 'Geriatria',	
 'Ginecologia',	 
 'Hematologia',	 
 'Homeopatia',	 
 'Infectologia',
 'Nefrologia',	
 'Neurologia',	 
 'Nutrição',	 
 'Nutrologia',		 
 'Oftalmologia',	 
 'Oncologia',	 
 'Ortopedia e Traumatologia',	
 'Otorrinolaringologia',
 'Pediatria	',
 'Pneumologia',	 
 'Psicologia',
 'Psicopedagogia',	 
 'Psiquiatria',
 'Reumatologia',	 
 'Urologia'	
  ];
  
  
  var Saomatheusespecialidades = [
 'Cardiologia',	 
 'Clínica Geral',	
 'Coloproctologia',	
 'Dermatologia',	 
 'Endocrinologia',	 	
 'Fisioterapia',	
 'Fonoaudiologia',	 	 
 'Geriatria',	
 'Ginecologia',	 
 'Hematologia',	 
 'Homeopatia',	 
 'Infectologia',
 'Nefrologia',	
 'Neurologia',	 
 'Nutrição',	 
 'Nutrologia',		 
 'Oftalmologia',	 
 'Oncologia',	 
 'Ortopedia e Traumatologia',	
 'Otorrinolaringologia',
 'Pediatria	',
 'Pneumologia',	 
 'Psicologia',
 'Psicopedagogia',	 
 'Psiquiatria',
 'Reumatologia',	 
 'Urologia'	
  ];
 

  $scope.especialidades = [];
   if ($stateParams.clinica === 'Femina') {
    $scope.especialidades = feminaespecialidades;
   }
  else if ($stateParams.clinica === 'Santa Rosa') {
      $scope.especialidades = Santarosaespecialidades;
   }
  else if ($stateParams.clinica === 'São matheus') {
       $scope.especialidades = Saomatheusespecialidades;
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
  