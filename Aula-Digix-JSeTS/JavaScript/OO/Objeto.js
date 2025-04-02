let carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2010,
    PaisOrigem: {
        pais: "Brasil",
        cidade: "Campo Grande"
    },
    ligar: function (){
        console.log("Ligando o carro....")
    }
}
console.table(carro);
console.log(carro.toString());
carro.ligar();

//modificando valores dentro do obj
carro.marca = "Ford";
carro.modelo = "Ka"

//deletando propriedades do objeto
delete carro.ano;
console.log(carro);

//Alguns operadores do objeto
console.log('marca' in carro);

//

