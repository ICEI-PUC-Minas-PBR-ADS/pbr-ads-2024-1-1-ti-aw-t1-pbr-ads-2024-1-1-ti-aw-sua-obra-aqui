//mensagem home
var typed = new Typed(".auto-type",{
    strings: ["Sua Obra Aqui!"],
    typeSpeed:150,
    backSpeed:150,
    loop: true
})
//mensagem home fim

//botão login

const showPopupBtn= document.querySelector(".login-btn");
const formPopup= document.querySelector(".form-popup");
const hidePopupBtn= document.querySelector(".form-popup .close-btn");
const loginRegisterLink= document.querySelectorAll(".form-box .bottom-link a");

showPopupBtn.addEventListener("click",() =>{
    document.body.classList.toggle("show-popup");

});

hidePopupBtn.addEventListener("click",() => showPopupBtn.click());


//troca de login para registro
loginRegisterLink.forEach(link => {
   link.addEventListener("click", (e) => {
     e.preventDefault();
     formPopup.classList[link.id === "register-link" ? 'add': 'remove']("show-register");
   });
});
    
