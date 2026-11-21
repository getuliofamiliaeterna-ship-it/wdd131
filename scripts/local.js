
const temperatura = 25;
const velocidade = 12;

const elementoSensacao = document.getElementById("sensacao-termica");

function calcularSensacaoTermica(temperatura, velocidade) {
    return 13.12 + 0.6215 * temperatura
        - 11.37 * (velocidade ** 0.16)
        + 0.3965 * temperatura * (velocidade ** 0.16);
}

if (temperatura <= 10 && velocidade > 4.8) {
    const resultado = calcularSensacaoTermica(temperatura, velocidade);
    elementoSensacao.textContent = `${resultado.toFixed(1)} °C`;
} else {
    elementoSensacao.textContent = "N/A";
}

const anoAtual = document.getElementById("ano-atual");
const ultimaModificacao = document.getElementById("ultima-modificacao");

anoAtual.textContent = new Date().getFullYear();
ultimaModificacao.textContent = document.lastModified;
