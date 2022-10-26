// function fazPost(url, body){
//     console.log("Body = ", body)
//     let request = new XMLHttpRequest()
//     request.open("POST", url, true)
//     request.setRequestHeader("Content-type", "application/json")
//     request.send(JSON.stringify(body))

//     request.onload = function(){
//         console.log(this.responseText)
//     }

//     return request
// }


function cadastrarUsuario(){
    
    url = "http://"
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let telefone = document.getElementById("telefone").value
    let senha = document.getElementById("senha").value
    let confirmarSenha = document.getElementById("confirmarSenha").value

    body = {
        "nome": nome,
        "email": email,
        "telefone": telefone,
        "senha": senha,
        "confirmarSenha": confirmarSenha
    }

    console.log(nome)
    console.log(email)
    console.log(telefone)
    console.log(senha)
    console.log(confirmarSenha)


    // fazPost(url, body)
}

function Logar(){
    url = "http://"
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
 

    body = {

        "email": email,
        "senha": senha,

    }

    console.log(email)
    console.log(senha)

}

function redefinirSenha(){

    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let confirmarSenha = document.getElementById("confirmarSenha").value


    body = {
        "email": email,
        "senha": senha,
        "confirmarSenha": confirmarSenha
    }

    console.log(email)
    console.log(senha)
    console.log(confirmarSenha)


}