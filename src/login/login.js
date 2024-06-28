


//visualiza senha 
let btn = document.querySelector(".fa-eye")
btn.addEventListener("click", ()=> {
   let inputSenha = document.querySelector("#senha")
   if(inputSenha.getAttribute("type")=="password"){
       inputSenha.setAttribute ("type", "text")
   }else{
       inputSenha.setAttribute ("type", "password")
   }
})


//Ir pra pós-Login

function entrar(){
   let email=document.querySelector('#email')
   let emailLabel = document.querySelector("#emailLabel")

   let senha=document.querySelector("#senha")
   let senhaLabel = document.querySelector("#senhaLabel")

   let msgError= document.querySelector("#msgError")
   
   let listaUser = []
   let userValid= {
    email: '',
    nome: '',
    senha: ''
   }
   listaUser = JSON.parse(localStorage.getItem("listaUser"))

   listaUser.forEach((item) => {
    
     


    if(email.value == item.emailCad && senha.value == item.senhaCad){
        userValid ={
            nome:item.nomeCad,
            email: item.emailCad,
            senha: item.senhaCad
            
        }

    }
    
   });

if(email.value == userValid.email && senha.value == userValid.senha ){
    window.location.href = "/mainPages/main.html"
  

   
    localStorage.setItem('userLogado', JSON.stringify((userValid)))

}else{
emailLabel.setAttribute("style", "color:red")
email.setAttribute("style", "border-color:red")
senhaLabel.setAttribute("style", "color:red")
senha.setAttribute("style", "border-color:red")

msgError.setAttribute("style", "display:block")
msgError.innerHTML = "Email ou senha incorretas"
email.focus()
}


}