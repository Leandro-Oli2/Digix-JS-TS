import { Animal}  from './Animal.js';

export class UrsoPolar extends Animal{
    static Levantar = true;
    constructor(nome, raca, peso, idade, tamanho){
        super(nome, raca, peso, idade);
        this.tamanho = tamanho;
    }

    LevantarUrso(){
        console.log("O urso " +this.nome+ " esta de pé!");
    }
    
}