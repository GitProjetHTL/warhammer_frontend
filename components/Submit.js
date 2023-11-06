import styles from '../styles/Submit.module.css'

const Submit = () => {


  return (
    <div>
         <div className={styles.presentation}>
        <div className={styles.content_presentation}>
            <h2>Nous contacter</h2>
            <h3>Email</h3>
            <input type="text" placeholder="Email" className={styles.input}/>
            <h3>Votre retour</h3>
            <textarea name="return" id="return" cols="20" rows="10" className={styles.textarea}></textarea>
            <br />
            <input type="button" value="Soumettre" className={styles.more} />
        </div>
      </div>
        <div id='content_bot'>
        

        </div>
    
    </div>
  )
}

export default Submit