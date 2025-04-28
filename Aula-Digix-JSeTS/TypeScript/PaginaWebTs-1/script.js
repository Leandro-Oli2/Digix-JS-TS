function saudarTratado() {
    var input = document.getElementById("nome1");
    //verificar se o elemento foi encontrado e é um input.
    if (input && input instanceof HTMLInputElement) {
        var nome = input.value.trim();
        if (nome === "") {
            alert("Por Favor, digite seu nome.");
        }
        else {
            alert("Ola ".concat(nome, ", tudo bem?"));
        }
    }
    else {
        alert("Elemento id não encontrado");
    }
}
