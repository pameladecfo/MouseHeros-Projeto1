//Realtime Databese - CADASTRO
var nameInput = document.getElementById('nome');
var emailInput = document.getElementById('email');
var telefoneInput = document.getElementById('idtelefone');
// var roleInput = document.getElementById('role');
var roleInput = document.querySelector('input[name="role"]:checked');
var senhaInput = document.getElementById('password');
var buttonInput = document.getElementById('idbutton');

// Ao clicar no botão, gera o nodeValue das variáveis que se quer coletar
buttonInput.addEventListener('click', function(){
    create(nameInput.nodeValue, emailInput.nodeValue,
        telefoneInput.nodeValue, senhaInput.nodeValue, roleInput.nodeValue)
});

// Função pra guardar as informações do usuário no banco de dados realtime
function create(nome,email,telefone,senha,role){
    var data = {
        nome: nome,
        email: email,
        telefone: telefone,
        senha: senha,
        role: role
    };
    return firebase.database().ref().child('users').push(data);
}

firebase.database().ref('users').on('value',function(snapshop){
    userList.innerHTML = '';
    snapshop.forEach(function(item){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().nome + ' : ' + item.val().email + ' : ' +item.val().telefone + ' : ' +item.val().senha + ' : ' +item.val().role));
        userList.appendChild(li);
    });
});


//ALTERAR DADOS DO USUÁRIO
var buttonAlterar = document.getElementById('alterar');

function alterar(){
    nome = document.getElementById('noome').value;
    telefone = document.getElementById('iidtelefone').value;
    email = document.getElementById('emaiil').value;
    
        var user = auth.currentUser
        var database_ref = database.ref()

        var user_data = {
            last_login : Date.now(),
            nome: nome,
            telefone: telefone
        }

        database_ref.child('users/' + user.uid).update(user_data)
        return alert('Atualizado com sucesso!');  
 }






//  user.updateEmail(email).then(() => {
//     alert('email atualizado')
// }).catch((error) => {

//   alert('email nao atualizado')
// });

