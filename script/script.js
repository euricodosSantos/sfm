let divLinhasCredito = document.getElementsByClassName("caixa");
let botao = document.getElementById("btMenu");
let on = 0;

let ad1 = document.getElementById("ad1");
let ad2 = document.getElementById("ad2");

function menu() {
  let nav = document.getElementById("menu");
  if (on === 0) {
    nav.style.display = "inline-block";
    on = 1;
    botao.src = "imagens/menu-x.png";
  } else {
    nav.style.display = "none";
    on = 0;
    botao.src = "imagens/menu.png";
  }
}

function mudarProv(boatao, prov) {
  let bt = document.getElementsByClassName('bt')
  let provDiv = document.getElementById("prov")
  for (let b of bt) {
      b.style.backgroundColor = 'white'
      b.style.color = 'black'
  }
  boatao.style.backgroundColor = '#313e59'
  boatao.style.color = 'white'
  provDiv.innerHTML = ""
  if (prov == "mp") {
      provDiv.innerHTML += "<h4>Maputo</h4>"
      provDiv.innerHTML += "<p>Av. 25 de Setembro,1791 - Maputo</p>"
      provDiv.innerHTML += `<p>\u{1F4DE}+258 86 391 3250</p>`
  } else if (prov == "zb") {
      provDiv.innerHTML += "<h4>Zambezia</h4>"
      provDiv.innerHTML += "<p>Av. 25 de Zambezia,1791 - Zambezia</p>"
      provDiv.innerHTML += "<p>\u{1F4DE}+258 86 319 0229</p>"
  } else if (prov == "np") {
      provDiv.innerHTML = "<h4>Nampula</h4>"
      provDiv.innerHTML += "<p>Av. 25 de Nampula,1791 - Nampula</p>"
      provDiv.innerHTML += "<p> \u{1F4DE}+258 86 231 6277</p>"
  }
  else if (prov == "in") {
      provDiv.innerHTML = "<h4>Inhambane</h4>"
      provDiv.innerHTML += "<p>Av. 25 de Inhambane,1791 - Inhambane</p>"
      provDiv.innerHTML += "<p> \u{1F4DE}+258 86 813 0474</p>"
  }
  else if (prov == "mc") {
      provDiv.innerHTML = "<h4>Manica</h4>"
      provDiv.innerHTML += "<p>Av. 25 de Manica,1791 - Manica</p>"
      provDiv.innerHTML += "<p>\u{1F4DE}+258 86 813 0474</p>"
  }
}

/* troca de imagens  */
function trocar(){
  let change  = document.querySelector('body')
  let th1=document.getElementById('h1')
  let tp1 = document.getElementById('P1')
  change.style.background = 'url(../imagens/imagem6.jpg) no-repeat'
  change.style.backgroundSize='cover'
  th1.innerHTML= 'Planifique o seu futuro aqui '
  tp1.innerHTML = 'Adira ao Credito e comece aqui a sua jornada de sucesso.'
}
function voltar (){
  let change  = document.querySelector('body')
  let th1=document.getElementById('h1')
  let tp1 = document.getElementById('P1')
  change.style.background = 'url(../imagens/imagem5.jpg) no-repeat'
  change.style.backgroundSize='cover'
  th1.innerHTML= 'Acelere os seus projectos de vida connosco'
  tp1.innerHTML = 'Adira já ao Crédito Colaborador e dê o passo certo.'

}