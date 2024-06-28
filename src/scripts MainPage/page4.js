

//PISO
let dadosP=JSON.parse(localStorage.getItem('dadosPiso'))

let areaP= document.querySelector('#pisoA')
let materialP = document.querySelector("#pisoM")

 materialP.innerHTML = `Material: ${dadosP.material}`
 areaP.innerHTML = `Área: ${dadosP.area}`


 document.getElementById('botaoPiso').addEventListener('click', function() {
    fetch('/webscrapingPiso/linksPiso.json')
        .then(response => response.json())
        .then(data => {
            const linksList = document.getElementById('linksList');
            linksList.innerHTML = ''; // Limpa a lista antes de adicionar novos links
            data.forEach(link => {
                const listItem = document.createElement('li');
                const anchor = document.createElement('a');
                anchor.href = link;
                anchor.textContent = link;
                anchor.target = '_blank'; // Abre o link em uma nova aba
                listItem.appendChild(anchor);
                linksList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Erro ao carregar os links:', error));
});


//PAREDE

let dadosParede=JSON.parse(localStorage.getItem('dadosParede'))

let areaPa= document.querySelector('#paredeA')
let materialPa = document.querySelector("#paredeM")

 materialPa.innerHTML = `Material: ${dadosParede.material}`
 areaPa.innerHTML = `Área: ${dadosParede.area}`


 document.getElementById('botaoParede').addEventListener('click', function() {
    fetch('/webscpraping/linksParede.json')
        .then(response => response.json())
        .then(data => {
            const linksList = document.getElementById('linksListParede');
            linksList.innerHTML = ''; // Limpa a lista antes de adicionar novos links
            data.forEach(link => {
                const listItem = document.createElement('li');
                const anchor = document.createElement('a');
                anchor.href = link;
                anchor.textContent = link;
                anchor.target = '_blank'; // Abre o link em uma nova aba
                listItem.appendChild(anchor);
                linksList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Erro ao carregar os links:', error));
});




//TELHADO
let dadosT=JSON.parse(localStorage.getItem('dadosTelhado'))

let areaT= document.querySelector('#telhadoA')
let materialT = document.querySelector("#telhadoM")

 materialT.innerHTML = `Material: ${dadosT.material}`
 areaT.innerHTML = `Área: ${dadosT.area}`


let btn = document.querySelector("#botaoPiso")
btn.addEventListener("click",()=> {
  btn.classList.add("active");
})


document.getElementById('botaoTelhado').addEventListener('click', function() {
    fetch('/webscrapingTelhado/linksTelha.json')
        .then(response => response.json())
        .then(data => {
            const linksList = document.getElementById('linksListTelhado');
            linksList.innerHTML = ''; // Limpa a lista antes de adicionar novos links
            data.forEach(link => {
                const listItem = document.createElement('li');
                const anchor = document.createElement('a');
                anchor.href = link;
                anchor.textContent = link;
                anchor.target = '_blank'; // Abre o link em uma nova aba
                listItem.appendChild(anchor);
                linksList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Erro ao carregar os links:', error));
});










//Verificação para chamar botão 

function checkPisoA() {
    var pisoA = document.getElementById('pisoA');
    var botao = document.getElementById('botaoPiso');

   
    var cellContent = pisoA.innerText.trim();
    if (cellContent.length > 0) {
      botao.style.display = 'inline-block'; 
    } else {
      botao.style.display = 'none'; 
    }
  }
  checkPisoA();




  function checkParedeA() {
    var paredeA = document.getElementById('paredeA');
    var botao = document.getElementById('botaoParede');

    var cellContent = paredeA.innerText.trim();
    if (cellContent.length > 0) {
      botao.style.display = 'inline-block'; 
    } else {
      botao.style.display = 'none'; 
    }
  }
  checkParedeA();






  function checkTelhadoA() {
    var telhadoA = document.getElementById('telhadoA');
    var botao = document.getElementById('botaoTelhado');

    // Verifica o conteúdo da célula paredeA
    var cellContent = telhadoA.innerText.trim();
    if (cellContent.length > 0) {
      botao.style.display = 'inline-block'; 
    } else {
      botao.style.display = 'none'; 
    }
  }
  checkTelhadoA();

