let girl1 = document.querySelectorAll("img")[0];
let girl2 = document.querySelectorAll("img")[1];
let girl3 = document.querySelectorAll("img")[2];

let subHeading1 = document.querySelectorAll("h3")[0];
let subHeading2 = document.querySelectorAll("h3")[1];
let subHeading3 = document.querySelectorAll("h3")[2];

let button1A = document.querySelector("#button1A");
let button1B = document.querySelector("#button1B");

let button2A = document.querySelector("#button2A");
let button2B = document.querySelector("#button2B");

let button3A = document.querySelector("#button3A");
let button3B = document.querySelector("#button3B");

button1A.addEventListener("click", function () {
  girl1.src = "./media/girl_1A.jpeg";
  subHeading1.textContent = "Queen";
});

button1B.addEventListener("click", function () {
  girl1.src = "./media/girl_1.jpeg";
  subHeading1.textContent = "Princess";
});

button2A.addEventListener("click", function () {
  girl2.src = "./media/girl_2A.jpeg";
  subHeading2.textContent = "Queen";
});

button2B.addEventListener("click", function () {
  girl2.src = "./media/girl_2.jpeg";
  subHeading2.textContent = "Princess";
});

button3A.addEventListener("click", function () {
  girl3.src = "./media/girl_3A.jpeg";
  subHeading3.textContent = "Queen";
});

button3B.addEventListener("click", function () {
  girl3.src = "./media/girl_3.jpeg";
  subHeading3.textContent = "Princess";
});
