//Realtime Databese - CADASTRO
var nameInput = document.getElementById('nome');
var emailInput = document.getElementById('email');
var telefoneInput = document.getElementById('idtelefone');
var senhaInput = document.getElementById('password');
var buttonInput = document.getElementById('idbutton');

// Ao clicar no botão, gera o nodeValue das variáveis que se quer coletar
buttonInput.addEventListener('click', function(){
    create(nameInput.nodeValue, emailInput.nodeValue,
        telefoneInput.nodeValue, senhaInput.nodeValue)
});

function create(nome,email,telefone,senha){
    var data = {
        nome: nome,
        email: email,
        telefone: telefone,
        senha: senha
    };
    return firebase.database().ref().child('users').push(data);
}

firebase.database().ref('users').on('value',function(snapshop){
    userList.innerHTML = '';
    snapshop.forEach(function(item){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().nome + ' : ' + item.val().email + ' : ' +item.val().telefone + ' : ' +item.val().senha));
        userList.appendChild(li);
    });
});