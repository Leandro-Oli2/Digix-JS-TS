function Evento({numero}){
    function MeuEvento(){
        console.log(`Opa , Fui ativado: ${numero}`)
    }
    return(
        <div>
            <p>Cliwue para disparar um evento</p>
            <button onClick={MeuEvento}>Ativar Evento</button>
        </div>
    )
}
export default Evento