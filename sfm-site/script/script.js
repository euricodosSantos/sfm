let divLinhasCredito = document.getElementsByClassName("linhasDeCredito");
let botao = document.getElementById("btMenu");
let on = 0;

let ad1 = document.getElementById("ad1");
let ad2 = document.getElementById("ad2");

function menu() {
  let nav = document.getElementById("nv");
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

function corAmarela(div, ad) {
  if (ad == "ad1") {
    ad1.style.borderColor = "#d9c877";    
  } else {
    ad2.style.borderColor = "#d9c877";    
  }
  div.style.borderColor = "#d9c877";
}

function corAzul(div, ad) {
  if (ad == "ad1") {
    ad1.style.borderColor = "#313e59";    
  } else {
    ad2.style.borderColor = "#313e59";    
  }
  div.style.borderColor = "#313e59";
}
