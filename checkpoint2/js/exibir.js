// EXIBIR INFOS
function exibir(){
    var user = auth.currentUser
    var database_ref = database.ref('users/' + user.uid)

    database_ref.on('value', (snapshot) =>{
        var data = snapshot.val();
        console.log('nome: ' + data.nome);
      });
}
exibir();
