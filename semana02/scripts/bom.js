
const campo = document.querySelector("#capfav");
const botao = document.querySelector("button");
const lista = document.querySelector("ul");

botao.addEventListener("click", function () {
    const capitulo = campo.value.trim();

    if (capitulo !== "") {
        const item = document.createElement("li");
        item.textContent = capitulo;

        const botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "❌";
        item.appendChild(botaoExcluir);

botaoExcluir.addEventListener("click", function () {
    item.remove();
});


        lista.appendChild(item);

        campo.value = "";
        campo.focus();
    }
});




