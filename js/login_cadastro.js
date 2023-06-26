function login(){
  var usuario = document.getElementById("usuario").value;
  var senha = document.getElementById("senha").value;
  if ( usuario == "programacao@web.com" && senha == "nota10"){
    alert ("Login realizado!!!");
    return false;
  } else{
    alert ("Usuário ou senha incorretos!!!!")
    return false;
  }
}

function register() {
  var usuario = document.getElementById("usuario").value;
  var confirmarUsuario = document.getElementById("confirmarUsuario").value;
  var senha = document.getElementById("senha").value;
  var confirmarSenha = document.getElementById("confirmarSenha").value;
  if ( usuario == confirmarUsuario && senha == confirmarSenha){
    alert ("Seja Bem vindo! Você acabou de se registrar!!! yay");
    window.location="index.html"
    return false;
  } else{
    alert ("Por favor verifique se suas informações estão corretas")
    return false;
  }
}