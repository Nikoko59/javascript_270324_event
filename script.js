const tit = document.getElementById("tit");
let button = document.getElementById("btn");
let mind = document.querySelector(".happy");
let contentRight = document.querySelector(".content-right");
let contentLeft = document.querySelector(".content-left");
let tit1 = document.getElementById("tit1");
let btn2 = document.getElementById("btn2");
let u;

button.addEventListener("click", myMind);

function myMind() {
  tit.textContent = "Libérez vous, devenez la meilleure version de vous même ";
  mind.style.background =
    "  url(./assets/img/zen.png) center/cover no-repeat  ";

  button.style.background = "#070142";
  button.style.color = "orange ";
  button.style.border = "1px solid orange";

  tit1.textContent = "Hyper Zen , Hyper Cool ";
  tit1.style.fontSize = "2rem";
  tit1.style.padding = "10px";
}

btn2.addEventListener("click", () => {
  u =
    "<span class='link'><a href='https://www.helsana.ch/fr/blog/psyche/pleine-conscience/meditation.html  alt='meditation' >Suivez le lien </span>";
  contentLeft.innerHTML += u;
});
