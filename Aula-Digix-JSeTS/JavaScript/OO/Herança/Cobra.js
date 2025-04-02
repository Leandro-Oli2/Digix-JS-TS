import { Animal }  from './Animal.js';

export class Cobra extends Animal{
    static venenosa = true;
    constructor(nome, raca, peso, idade, comprimento){
        super(nome, raca, peso, idade);
        this.comprimento = comprimento;
    }

    procriar(){
        console.log("Cobra botou ovos");
    }
}