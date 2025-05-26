import styles from './botao.module.css'

function BotaoEstilizado(){
    return(
        <button className={styles.botaoLegal} onClick={() => alert('Botão Clicado!')}>Clique Aqui</button>
    )
}
export default BotaoEstilizado