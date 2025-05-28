import { useState } from "react"

function Contador(){
    const [contador, setContador] = useState(0)

    function contar(e){
        e.preventDefault()
        setContador(contador + 1)
    }
    return(
        <div>
            <h1>Contador</h1>
            <form>   
                <div>
                    <input type="number" name="number" placeholder={contador}/>
                </div>
                <div>
                    <input type="button" onClick={contar} value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}
export default Contador