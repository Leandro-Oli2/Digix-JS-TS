function saudarTratado2(): void{
    const input = document.getElementById("nome");
    
    //verificar se o elemento foi encontrado e é um input.
    if(input && input instanceof HTMLInputElement){
        const nome = input.value.trim();


        if(nome === ""){
            alert("Por Favor, digite seu nome.");
        }else{
            alert(`Ola ${nome}, tudo bem?`);
        }
    }else{
        alert("Elemento id não encontrado");
    }

}