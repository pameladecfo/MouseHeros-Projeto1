// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCIDCEQ_rGHaEuVQ_r-LbmzNu7LF6pf2wY",
    authDomain: "novamente-f5d82.firebaseapp.com",
    projectId: "novamente-f5d82",
    storageBucket: "novamente-f5d82.appspot.com",
    messagingSenderId: "28455983663",
    appId: "1:28455983663:web:4be5f60d75c5877ccc04da"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //DECLARANDO AS CONSTANTES
  const auth = firebase.auth();
  const database = firebase.database();

  //FUNCÃO PARA FAZER O REGISTRO 
  function register(){
    email = document.getElementById('email').value
      password = document.getElementById('password').value
      cpassword = document.getElementById('cpassword').value
      nome = document.getElementById('nome').value
    //   endereco = document.getElementById('endereco').value
      idtelefone = document.getElementById('idtelefone').value
    //   funcaoprojeto = document.getElementById('funcaoprojeto').value

    
    if (validade_email(email) == false || validade_password(password) == false){
       alert('Email e Senha incorretos')
        return
    }

    if (validade_field(nome) == false || validade_field(idtelefone) == false 
    ) {
        alert('Preencha todos os campos abaixo')
        return
    }

    if (confirmarSenha(password,cpassword) == false){
        alert('Senhas incompatíveis')
        return
    }
    
    auth.createUserWithEmailAndPassword(email,password).then(function(){
        var user = auth.currentUser
        var database_ref = database.ref()

        var user_data = {
            email : email,
            nome : nome,
            // endereco : endereco,
            telefone : idtelefone,
            last_login : Date.now()
        }

        database_ref.child('users/' + user.uid).set(user_data)
        
        alert('user cadastrado')



     }).catch(function(error){
        var error_code = error.code
        var error_message = error.message

        alert(error_message)
     })
  }

  //FUNÇÃO PARA FAZER O LOGIN
  function login(){
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    if (validade_email(email) == false || validade_password(password) == false){
        alert('Senha ou email não compatíveis')
         return
     }

     auth.signInWithEmailAndPassword(email,password).then(function(){
        var user = auth.currentUser
        var database_ref = database.ref()

        var user_data = {
            last_login : Date.now()
        }

        database_ref.child('users/' + user.uid).update(user_data)
        
        



     }).catch(function(error){
        var error_code = error.code
        var error_message = error.message

        alert(error_message)
     })
  }

  //FUNÇÃO PARA CONFERIR SE O EMAIL ESTÁ CONFORME O PADRÃO
  function validade_email(email){
      expression = /^[^@]+@\w+(\.\w+)+\w$/
      if (expression.test(email) == true) {
          return true
      } else {
          return false
      }
  }
  //FUNÇÃO PARA CONFERIR SE A SENHA ESTÁ CONFORME O PADRÃO
  function validade_password(password){
    if (password<6) {
        return false;
    } else {
        return true
    }
}
  //FUNÇÃO PARA CONFERIR SE A SENHA ESTÁ CCONFORME O PADRÃO
function validade_field(field){
    if(field == null){
        return false;
    }
    if (field.length <= 0) {
        return false
    }else {
        return true
    }
}
    // FUNÇÃO PARA CONFERIR SE A SENHA E A CONFIRMAÇÃO SÃO AS MESMAS
function confirmarSenha(password,cpassword){
    if(password != cpassword){
        return false;
    }else {
        return true
    }
}

//FUNÇÃO PARA RESETAR A SENHA
function resetarSenha(){
    email = document.getElementById('email').value;

    if (validade_email(email) == false){
        alert('Coloque o seu email!')
         return
     }
     auth.sendPasswordResetEmail(email).then(function(){
        alert('Foi enviando um email de recuperação para sua conta!')

     }).catch(function(error){
        var error_code = error.code
        var error_message = error.message

        alert(error_message)
     })
}

//FUNÇÃO PARA SAIR 
function logout(){
    firebase.auth().signOut();
}

