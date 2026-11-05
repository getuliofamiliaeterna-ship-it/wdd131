
const anoAtual = document.querySelector("#anoatual");
anoAtual.textContent = new Date().getFullYear();

const ultimaModificacao = document.querySelector("#ultimaModificacao");
ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;

