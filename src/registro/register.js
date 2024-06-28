//Humor feminino
 let btn = document.querySelector("#verSenha")
 let btnConfirm = document.querySelector("#verconfirmSenha")

 let nome=document.querySelector("#nome")
 let labelNome=document.querySelector("#labelNome")
 let validNome = false

 let email=document.querySelector("#email")
 let labelEmail=document.querySelector("#labelEmail")
 let validEmail = false

 let senha=document.querySelector("#senha")
 let labelSenha=document.querySelector("#labelSenha")
 let validSenha = false

 let confirmSenha=document.querySelector("#confirmSenha")
 let labelconfirmSenha=document.querySelector("#labelconfirmSenha")
 let validconfirmSenha = false

 let msgError=document.querySelector("#msgError")
 let msgSucess=document.querySelector("#msgSucess")


// Visualiza senha
 btn.addEventListener("click", ()=> {
    let inputSenha = document.querySelector("#senha")
    if(inputSenha.getAttribute("type")=="password"){
        inputSenha.setAttribute ("type", "text")
    }else{
        inputSenha.setAttribute ("type", "password")
    }
 })


 
 btnConfirm.addEventListener("click", ()=> {
    let inputSenha = document.querySelector("#confirmSenha")
    if(inputSenha.getAttribute("type")=="password"){
        inputSenha.setAttribute ("type", "text")
    }else{
        inputSenha.setAttribute ("type", "password")
    }
 })

//validação de cadastro
nome.addEventListener("keyup", () => {
    if(nome.value.length <=2 ){
    labelNome.setAttribute("style", "color:white")
    labelNome.innerHTML ="<strong>Nome *Insira no minimo 3 caracteres</strong> "
    nome.setAttribute("style","border-color:red")
    validNome = false
    }else{
        labelNome.setAttribute("style", "color:green")
         labelNome.innerHTML ="Nome"
         nome.setAttribute("style","border-color:green")
         validNome = true

    }
})


//erro
email.addEventListener("keyup", () => {
    if(email.textContent.includes('@')){
    labelEmail.setAttribute("style", "color:white")
    labelEmail.innerHTML ="<strong> Email *Digite um email valido</strong> "
    email.setAttribute("style","border-color:red")
    validEmail = false
    }else{
        labelEmail.setAttribute("style", "color:green")
         labelEmail.innerHTML ="Email"
         email.setAttribute("style","border-color:green")
         validEmail = true

    }
})


senha.addEventListener("keyup", () => {
    if(senha.value.length <=5 ){
    labelSenha.setAttribute("style", "color:white")
    labelSenha.innerHTML ="<strong>Senha *Insira no minimo 6 caracteres</strong> "
    senha.setAttribute("style","border-color:red")
    validSenha=false
    }else{
        labelSenha.setAttribute("style", "color:green")
         labelSenha.innerHTML ="Senha"
         senha.setAttribute("style","border-color:green")
         validSenha = true

    }
})



confirmSenha.addEventListener("keyup", () => {
    if(senha.value != confirmSenha.value){
    labelconfirmSenha.setAttribute("style", "color:white")
    labelconfirmSenha.innerHTML ="<strong>Confirma Senha * Senha não coincide</strong> "
    confirmSenha.setAttribute("style","border-color:red")
    validconfirmSenha=false
    }else{
        labelconfirmSenha.setAttribute("style", "color:green")
         labelconfirmSenha.innerHTML ="Confirma Senha"
         confirmSenha.setAttribute("style","border-color:green")
         validconfirmSenha=true

    }
})


 //Cadastro

function cadastrar(){
    if(validNome && validEmail &&  validSenha &&  validconfirmSenha ){
    let listaUser= JSON.parse(localStorage.getItem('listaUser') || '[]')

    listaUser.push(
        {
            nomeCad: nome.value,
            emailCad: email.value,
            senhaCad: senha.value
        }
    )

 localStorage.setItem('listaUser', JSON.stringify(listaUser))

  msgSucess.setAttribute("style","display:block")
    msgSucess.innerHTML="<strong>Bem vindo(a)!</strong>"

    msgError.setAttribute("style","display:none")
    msgError.innerHTML=""
   
    setTimeout(()=>{
  window.location.href= "/login/login.html"
    },2000)
    

    } else{
         msgError.setAttribute("style","display:block")
    msgError.innerHTML="<strong>Ops! Verifique se preencheu todos os campos corretamente.</strong>"

    msgSucess.setAttribute("style","display:none")
    msgSucess.innerHTML=""


    }
}
