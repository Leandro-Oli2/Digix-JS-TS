import { Pessoa } from "./Pessoa";
import { Corrente, Poupanca } from "./Conta";

function main(){
    try{
        //Criação de uma nova Pessao
        const cliente1 = new Pessoa("João", 30);
        const cliente2 = new Pessoa("Leandro", 19);

        //Criando as Contas.
        const contaCorrente = new Corrente(cliente1, 1000, 500);
        const contaPoupanca = new Poupanca(cliente2, 6000, 0.5);

        //Operações Financeiras
        contaCorrente.depositar(500);
        contaCorrente.sacar(1000);
        console.log(contaCorrente.exibirDados());

        contaPoupanca.aplicarRendimento();
        contaPoupanca.sacar(300); 
        console.log(contaPoupanca.exibirDados());
    }catch(er: any){
        console.error("Erro: ", er.message);
    }
}
main();