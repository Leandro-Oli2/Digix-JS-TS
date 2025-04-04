import { Pessoa } from "./Pessoa";

export class Conta{
    protected titular: Pessoa;
    protected saldo: number;

    constructor(titular: Pessoa, saldo: number){
        this.titular = titular;
        this.saldo = saldo;
    }

    //Metodo para depositar um valor na conta
    public depositar(valor: number): void{
        if(valor <= 0) throw new Error("Valor de deposito deve ser positivo.");
        this.saldo += valor;
    }
    //Metodo para saque
    public sacar(valor: number): void{
        if(valor <= 0) throw new Error("Valor de saque deve ser positivo.");
        if(valor > this.saldo) throw new Error("Saldo Insuficiente.");
        this.saldo -= valor;
    }
    public exibirDados(): string{
        return `titular: ${this.titular.getNome()}, Saldo: ${this.saldo}`;
    }
}
export class Poupanca extends Conta{
    private taxaRendimento: number; // propriedade privada
    //Construtor que inicializa as propriedades

    constructor(titular: Pessoa, saldo: number, taxaRendimento: number){
        super(titular, saldo);
        this.taxaRendimento = taxaRendimento;
    }

    public aplicarRendimento(): void{
        this.saldo += this.saldo * (this.taxaRendimento / 100);
    }

    public override exibirDados(): string{
        return `titular: ${this.titular.getNome()}, Saldo: ${this.saldo}, Rendimento: ${this.taxaRendimento}%`;
    };
}

export class Corrente extends Conta{
    private limiteChequeEspecial: number;

    constructor(titular: Pessoa, saldo: number, limiteChequeEsp: number){
        super(titular, saldo);
        this.limiteChequeEspecial = limiteChequeEsp;
    }

    public override sacar(valor: number): void{
        if(valor > this.saldo + this.limiteChequeEspecial){
            throw new Error("Valor de saque Excede  limite do cheque especial.");
        }
        this.saldo -= valor;
    }
    public override exibirDados(): string{
        return `Titular: ${this.titular.getNome()}, Saldo: ${this.saldo}, Limite Cheque Especial: ${this.limiteChequeEspecial}`;
    }
}