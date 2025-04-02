import { writeFile } from 'fs';

const produto = {
    nome: 'Produto',
    preco: 1.99,
    desconto: 0.2
}
writeFile('arquvioGerado.json', JSON.stringify(produto), err=>{
    console.log (err || 'Arquivo salvo com sucesso!')
})