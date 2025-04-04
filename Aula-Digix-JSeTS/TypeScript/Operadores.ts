let a: number = 10;
let b: number = 5;

var totasoma: number = a + b;
var totalSubtracao: number = a - b;
var totalMult: number = a * b;
var totalDivisao: number = a / b;
var totalResto: number = a % b;

console.log(`Soma: ${totasoma} + Subtracao: ${totalSubtracao} + Multiplicacao ${totalMult} + Divisao: ${totalDivisao} + Resto: ${totalResto}`);

// Operadores de texto
let nome: string = "Lucas";
let sobrenome: string = "Silva";
let textoconcatenado: string = nome + sobrenome;
console.log(`Nome completo: ${textoconcatenado}`);
let textoRepetido: string = nome.repeat(3);
console.log(`Nome Repetido: ${textoRepetido}`);
//ts-node {NomeArquivo.ts}

//Operadores de Comparacao
let comparacao1: boolean = a == b;
let comparacao2: boolean = a != b;
let comparacao3: boolean = a === b;
let comparacao4: boolean = a !== b;
console.log(`Comparação 1: ${comparacao1} + Comparação 2: ${comparacao2} + Comparação 3: ${comparacao3} + Comparação 4: ${comparacao4}`);

let comparacao5: boolean = a > 0 && b > 0;
let comparacao6: boolean = a < 0 || b < 0;
let comparacao7: boolean = !( a > 0);
console.log(`Comparação 5: ${comparacao5} + Comparação 6: ${comparacao6} + Comparação 7: ${comparacao7}`);

//Operação Ternaria
let resultado: string = (a>b) ? "A maior que B" : "B maior que A";
console.log(`Resultado: ${resultado}`);
let valor: number = 10;
valor += 5;
valor /= 5;
valor *= 5;
valor -= 5;
valor %= 5;
console.log(`Valor: ${valor}`);


let contador: number =0;
contador++;
contador--;
console.log(`Contador: ${contador}`);

//Operador de nullish coalescing
let valoNulo: number | null = null;
let valorDefault: number = valoNulo ?? 10;
console.log(`Valor Nulo: ${valoNulo} + Valor default: ${valorDefault}`);

//Operador de Spread
let numeros: number[] = [1, 2, 3, 4, 5];
let novosNumeros: number[] = [...numeros, 6, 7, 8];
console.log(`Numeros: ${numeros} + Novos Numeros: ${novosNumeros}`);


//Operador de destructuring
let pessoa: {nome: string, idade: number} = {nome: "Lucas", idade: 25};

let {nome: nomePessoa, idade: idadePessoa} = pessoa;
console.log(`Nome: ${nomePessoa} + Idade: ${idadePessoa}`);


//criando um objeto e como ele vai ser chamado.
let objeto: { nome: string; idade: number} = {nome: "Lucas", idade: 25};
let resultados: {[key: string]: number | string | boolean} = {
    soma: totasoma,
    subtracao: totalSubtracao,
    multiplicacao: totalMult,
    divisao: totalDivisao,
    resto: totalResto,
}
console.log(resultados["soma"]);

let resultado2: {[key: string]: any} = {
    nome: "Lucas",
    idade: 25,
    ativo: true,
    endereco: {
        rua: "Rua 1",
        numero: 123,
    },
}
console.log(resultado2["idade"]);


//Função
type Funcao = (a: number, b: number) => number;

function soma(a: number, b: number){
    return a + b;
}

const somaArrow: Funcao = (a, b) => a + b;

const somaAnonima: Funcao = function(a, b){
    return a + b;
}

const somaRetornoImplicito: Funcao = (a, b) => a + b;

function somaComParametrosOpcionais(a: number, b?:number): number{
    if(b){
        return a + b;
    }
    return a;
}
console.log(soma(5, 9));

//Executamos esse arquivo usando a ferramenta deno, que é uma ferramenta de execução de codigo TypeScript
//Instalar o deno: iwr https://deno.land/install.ps1 -useb | iex
//Executar: deno run {nomeArquivo.ts}
//Executar com permissões: deno run --allow-read {nomeArquivo.ts}