import styles from '../styles/Wargame.module.css'
import { useState,useEffect } from 'react';
import WargameContent from './WargameContent'

const Wargame = () => {

const [Codex,setCodex]=useState([]);


useEffect(() => {
  fetch("https://warhammer-backend.vercel.app/wargame")
  .then(response => response.json())
  .then(data=>{
    // console.log(data)
    
   const codex = data.data.map(item => ({
    id: item._id,
    name: item.name,
    img: item.img,
    price: item.price,
    description: item.description,
    type:item.type,
    quantite:0,
     })
    );
    setCodex(codex);
  })
}, [])

console.log(Codex)

let Content =  Codex.map((item, index) => (
  <WargameContent
    key={index}
    id={item.id}
    name={item.name}
    img={item.img}
    price={item.price}
    description={item.description}
  />
))


  return (
    <>
       <div>
      <div className={styles.presentation}>
        <div className={styles.content_presentation}>
          <h1>Bienvenue dans l'univers de warhammer</h1>
          <p>Le hobby Warhammer propose plusieur type d'activité:</p>
          <ul className={styles.content_list}>
            <li>La collection d'armée.</li>
            <li>Le modelisme et la peinture de figurines.</li>
            <li>Le Jeux de combat de figurines.</li>
          </ul>
          <a href="#content_bot" className={styles.more}>more info ...</a>
        </div>
      </div>
        <h2>LES CODEX</h2>
        <p>Commencer par le codex de votre faction afin de connaitre l'histoire et les unitées qui compose cette faction.</p>
      <div className={styles.all_content}>

       {Content}

      </div>
    </div>
    </>
  )
}

export default Wargame