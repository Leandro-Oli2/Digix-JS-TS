import './mensagem.css'
function BemVindo({mensagem}){
    return(
        <div className="mensagem">
            <h2>Mensagem: {mensagem}</h2>
        </div>
        
    )
    
}
export default BemVindo