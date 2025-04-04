export class Pessoa{
    private nome: string;
    private idade: number;


    //consrutor
    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    //Getters e Setters para ter o acesso as propriedades privadas

    public getNome(): string{
        return this.nome;
    }
    public setNome(nome: string): void{
        if(nome.length < 3){
            throw new Error("Nome deve ter mais de 3 caracteres");
        }
        this.nome = nome;
    }
    public getIdade(): number{
        return this.idade;
    }
    public setIdade(nome: number): void{
        this.idade = nome;
    }


    public exibirDados(): string{
        return `Nome: ${this.nome}, Idade: ${this.idade}`;
    }
}