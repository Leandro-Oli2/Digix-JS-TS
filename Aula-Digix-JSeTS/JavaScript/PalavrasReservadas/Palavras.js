let pessoa = {
    nome: "Lucas"
}
let pessoa2 = {
    
}

console.log(Object.getOwnPropertyDescriptor(pessoa)); // Mostra os atributos e metodos do objeto

//Assign
Object.assign(pessoa2, pessoa); //copia o objeto pessoa para pessoa2

let config = {
    ip: '127.0.0.1',
    port: '8080',
    block: true,
}
let {ip, port, block} = config; // desestrutura o objeto
console.log(ip, port, block); // imprime os valores das variáveis

//Desestruturar um array
let lista = ['Lucas', 'Leandro', 'Maria'];
let [nome1, nome2, nome3] = lista; // desestrutura a array

console.log(nome1, nome2, nome3); // imprime os valores


//Desestruturar uma array com rest operator
let lista2 = ['Lucas', 'Maria', 'João', 'Jose'];
let [nome4, ...resto] = lista2; // Desestrutura o array

console.log(nome4); // imprime o primeiro nome

console.log(resto); // imprime o resto do array



