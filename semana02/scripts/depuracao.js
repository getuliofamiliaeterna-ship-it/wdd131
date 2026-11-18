
const PI = 3.14159;
let raio = 10;

raio = 12;

const resultadoArea = document.querySelector("#area");
const resultadoRaio = document.querySelector("#raio");

const area = PI * raio * raio;

resultadoArea.textContent = area;
resultadoRaio.textContent = raio;

