//navegação das páginas
function showPage(page) {
    document.getElementById('pageFrame').src = page;
  }






  //sidebar

  const body = document.querySelector("body"),
       sidebar = body.querySelector(".sidebar"),
       toggle = body.querySelector(".toggle"),
       modeSwitch = body.querySelector(".toggle-switch"),
       modeText = body.querySelector(".mode-text");

       toggle.addEventListener("click",() => {
        sidebar.classList.toggle("close");
       });

       modeSwitch.addEventListener("click",()=>{
        body.classList.toggle("dark");

       if(body.classList.contains("dark"))
        {
        modeText.innerText="Modo Claro"
       }else{
        modeText.innerText="Modo Escuro"

       }
      });

      


//Login-of

function sair(){
  localStorage.removeItem('userLogado')
  localStorage.removeItem('token')
  window.location.href="/login/login.html"
}
  