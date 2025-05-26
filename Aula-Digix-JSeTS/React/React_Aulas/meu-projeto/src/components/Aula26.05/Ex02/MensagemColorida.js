

function MensagemColorida (props){
    return(
        <div>
            <p style={{color: props.cor, fontSize: "20px"}}>{props.texto}</p>
        </div>
    )
}
export default MensagemColorida