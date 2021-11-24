const divLinhasCredito = document.getElementsByClassName("caixa");
const botao = document.getElementById("btMenu");
let on = 0;
const ad1 = document.getElementById("ad1");
const ad2 = document.getElementById("ad2");
const rad1 = document.getElementById("rad1");
const rad2 = document.getElementById("rad2");
const circulo1 = document.getElementById("c1");
const circulo2 = document.getElementById("c2");

let nav = document.getElementById("menu");
function menu() {
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



function trocarSlide() {
  if (rad2.checked == true) {
    circulo1.setAttribute("src", "imagens/circulo-preenchido.png");
    circulo2.setAttribute("src", "imagens/circulo.png");
    rad1.checked = true;
  } else if (rad1.checked == true) {
    circulo1.setAttribute("src", "imagens/circulo.png");
    circulo2.setAttribute("src", "imagens/circulo-preenchido.png");
    rad2.checked = true;
  }
}

setInterval(trocarSlide, 5000);


function preencher(st) {
  st.setAttribute("src", "imagens/tras-preenchido.png");
}

function seta(st) {
  st.setAttribute("src", "imagens/tras.png");
}

function mudarProv(boatao, prov) {
  let bt = document.getElementsByClassName("bt");
  let provDiv = document.getElementById("prov");
  for (let b of bt) {
    b.style.backgroundColor = "white";
    b.style.color = "black";
  }
  boatao.style.backgroundColor = "#313e59";
  boatao.style.color = "white";
  provDiv.innerHTML = "";
  if (prov == "mp") {
    provDiv.innerHTML += "<h4>Maputo</h4>";
    provDiv.innerHTML += "<p>Av. 25 de Setembro,1791 - Maputo</p>";
    provDiv.innerHTML += `<p>\u{1F4DE}+258 86 391 3250</p>`;
  } else if (prov == "zb") {
    provDiv.innerHTML += "<h4>Zambezia</h4>";
    provDiv.innerHTML += "<p>Av. 25 de Zambezia,1791 - Zambezia</p>";
    provDiv.innerHTML += "<p>\u{1F4DE}+258 86 319 0229</p>";
  } else if (prov == "np") {
    provDiv.innerHTML = "<h4>Nampula</h4>";
    provDiv.innerHTML += "<p>Av. 25 de Nampula,1791 - Nampula</p>";
    provDiv.innerHTML += "<p> \u{1F4DE}+258 86 231 6277</p>";
  } else if (prov == "in") {
    provDiv.innerHTML = "<h4>Inhambane</h4>";
    provDiv.innerHTML += "<p>Av. 25 de Inhambane,1791 - Inhambane</p>";
    provDiv.innerHTML += "<p> \u{1F4DE}+258 86 813 0474</p>";
  } else if (prov == "mc") {
    provDiv.innerHTML = "<h4>Manica</h4>";
    provDiv.innerHTML += "<p>Av. 25 de Manica,1791 - Manica</p>";
    provDiv.innerHTML += "<p>\u{1F4DE}+258 86 813 0474</p>";
  }
}

window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

