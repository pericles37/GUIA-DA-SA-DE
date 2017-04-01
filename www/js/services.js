angular.module('starter.services', [])

.factory("Context", function() {
var config = {
    apiKey: "AIzaSyA7VCQyKBwvKB6JDa7OXq2_WmF6DBBMcfM",
    authDomain: "guia-da-saude.firebaseapp.com",
    databaseURL: "https://guia-da-saude.firebaseio.com",
    projectId: "guia-da-saude",
    storageBucket: "guia-da-saude.appspot.com",
    messagingSenderId: "69814055076"
  };

firebase.initializeApp(config);

return {
  get: function() {
    return firebase;
  }
}
})

.factory("Login", function(Context)  {

 return {
    login: function(email, senha, callback) {
      firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(function() {
      callback();  
      })
      .catch(function(error) {
      callback(error);
      });
    },
    novo: function(email, senha, callback) {
      firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then(function() {
        callback();
    })
    .catch(function(error) {
      callback(error)
    });

    }
  };
})
 
 .factory("Tarefas", function(Context){
   return{
     get: function(callback){
       firebase.database().ref('tarefas').on('value', function(snapshot) {
         callback(snapshot.val());

       })
       

     }
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

 