let idade = 18;
    //condição simples
    if( idade >= 18){
        console.log("Maior de idade");
    }
    //composta
    if(idade >= 18){
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }
    //composta com else if
    if(idade >= 18){
        console.log("Maior de idade");
    } else if(idade >= 12){
        console.log("Adolescente");
    }else{
        console.log("Criança")
    }

    //ternario
    let podeVotar = (idade >= 18) ? "Pode Votar" : "Não pode Votar";
    console.log(podeVotar);

    let podeVotar2 = (idade >= 18) ? "Pode votar" : (idade >= 12) ? "Adolescente" : "Criança";
    console.log(podeVotar2);

    switch (dia){
        case 1:
            console.log("Domingo");
            break;
        case 2:
            console.log("Segunda-feira");
            break;
        case 3:
            console.log("Terça-feira");
            break;
        default:
            console.log("Não existe essa opção");
    }