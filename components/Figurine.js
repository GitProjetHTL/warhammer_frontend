import styles from '../styles/Figurine.module.css'
import {useState , useEffect} from 'react';
import WargameContent from './WargameContent';

function Figurine() {

   const [Figure,setFigure]=useState([]);
   const [Type,setType]=useState("")

  useEffect(() => {
    fetch(`http://localhost:3000/figure/${Type}`)
    .then(response => response.json())
    .then(data=>{
      console.log(data)
      
     const figure = data.data.map(item => ({
        id:item._id,
        name: item.name,
        img: item.img,
        price: item.price,
        description: item.description,
        type:item.type,
        quantite:0,
       })
      );
      //crée un réducer de database<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

      setFigure(figure);
    })
  }, [Type])
  
 
  
  let Content =  Figure.map((item, index) => (
    <WargameContent
      id={item.id}
      key={index}
      name={item.name}
      img={item.img}
      price={item.price}
      description={item.description}
      type={item.type}
    />
  ))
  return (
    <>
     <div>
      <div className={styles.presentation}>
        <div className={styles.content_presentation}>
          <h1>Bienvenue dans l'univers de warhammer</h1>
          <p>Le hobby Warhammer propose plusieur type d'activité:</p>
          <ul>
            <li>La collection d'armée.</li>
            <li>Le modelisme et la peinture de figurines.</li>
            <li>Le Jeux de combat de figurines.</li>
          </ul>
          <a href="#content_bot" className={styles.more}>more info ...</a>
        </div>
      </div>
      <div className={styles.content_bot}>
        <div className={styles.armyFilter}>
          <div className={styles.order} onClick={()=>setType("ordre")}>Grande alliance de l'Ordre</div>
          <div className={styles.chaos} onClick={()=>setType("chaos")}>Grande alliance du Chaos</div>
          <div className={styles.death} onClick={()=>setType("death")}>Grande alliance de la Mort</div>
          <div className={styles.destruction} onClick={()=>setType("destruction")}>Grande alliance de la Destruction</div>
          <div className={styles.allArmy} onClick={()=>setType("")}>Toutes nos figurines</div>
        </div>
        <div>
        </div>
       {Content}
      </div>
    </div>
    </>
  );
}

export default Figurine;
