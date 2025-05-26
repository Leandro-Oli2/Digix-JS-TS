import styles from './Frase.module.css'
function Frase(){
    return(
        <div className={styles.fraseContainer}> 
            <p className={styles.fraseContent}>Frase: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum quod nisi temporibus numquam magni odit esse dignissimos enim, eum labore iste ab mollitia, perspiciatis possimus libero doloremque aliquam, saepe molestiae.</p>
        </div>
    )
}

export default Frase