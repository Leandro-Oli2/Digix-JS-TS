import { useState } from "react"

function Form(){
    function CadastrarUsuario(e){
        e.preventDefault()
        alert(`Usuario: ${nome}\nSenha ${password}\nCadastrados com sucesso!`)
    }

    const [nome, setNome] = useState()
    const [password, setPassword] = useState()
    return(
        <div>
            <h1>Cadastro:</h1>
            <form onSubmit={CadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name="nome" id="nome" placeholder="Digite seu Nome" onChange={(e) => setNome(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" name="senha" id="senha" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}
export default Form