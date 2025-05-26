import styles from './PerfilUsuario.module.css'

function PerfilUsuario({foto, nome, bio}){
    return(
        <div>
            <img src={foto} alt='foto de perfil' />
            <h2 className={styles.tituloNome}>{nome}</h2>
            <p className={styles.bio}>{bio}</p>
            <button style={{backgroundColor:"greenyellow", padding:"20px", cursor:'pointer', borderRadius: "50px"}}>Seguir</button>
        </div>
    )
}
export default PerfilUsuario