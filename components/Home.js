import styles from '../styles/Home.module.css';
import { useState,useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/fontawesome-svg-core'
import { useDispatch } from 'react-redux';


import Figurine from './Figurine';
import PaintAndMod from './PaintAndMod';
import Wargame from './Wargame'
import Submit  from './Submit'
import Sign_up from './Sign_up'
import Cart from './Cart'
import {addProduct} from '../reducers/allProduct';

function Home() {
  
   const BACKEND="https://warhammer-backend.vercel.app"
   const dispatch = useDispatch();
   const [newProduct,setNewProduct]=useState("")

  const [Navigation,setNavigation]=useState("");
  const user= useSelector((state) => state.user.value)

  const[search,setSearch]=useState("")

  console.log(user)

  useEffect(()=>{
    fetch(`${BACKEND}/figure/${search}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const figure = data.data.map(item => ({
        id: item.id,
        name: item.name,
        img: item.img,
        price: item.price,
        description: item.description,
        type: item.type,
        quantite: 0,
      }));

      // Dispatch each product individually
      figure.forEach(product => {
        dispatch(addProduct(product));
      });
    });

  },[search])

  useEffect(() => {
  //   fetch('http://localhost:3000/figure')
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data);
  //   // Traitez les données ici
  // })
  // .catch(error => {
  //   console.error('Erreur de fetch :', error);
  // });
    fetch(`${BACKEND}/figure`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const figure = data.data.map(item => ({
        id: item.id,
        name: item.name,
        img: item.img,
        price: item.price,
        description: item.description,
        type: item.type,
        quantite: 0,
      }));

      // Dispatch each product individually
      figure.forEach(product => {
        dispatch(addProduct(product));
      });
    });


    // fetch("https://warhammer-backend.vercel.app/wargame")
    // .then(response => response.json())
    // .then(data=>{
    //   console.log(data)
      
    //  const codex = data.data.map(item => ({
    //   id:item._id,
    //   name: item.name,
    //   img: item.img,
    //   price: item.price,
    //   description: item.description,
    //   quantite:0,
    //    })
    //   );
    //   codex.forEach(codex=> {
    //     dispatch(addProduct(codex));
    //   });


    // })
    // fetch("https://warhammer-backend.vercel.app/paint")
    // .then(response => response.json())
    // .then(data=>{
    //   console.log(data)
      
    //  const paint = data.data.map(item => ({
    //   id:item._id,
    //   name: item.name,
    //   img: item.img,
    //   price: item.price,
    //   description: item.description,
    //   quantite:0,
    //    })
    //   );
    //   paint.forEach(paint => {
    //     dispatch(addProduct(paint));
    //   });
    // })
  }, [newProduct])
    
  
  
  
  const content = () =>{
    if (Navigation==="wargame") {
      return <Wargame/>;
    }else if (Navigation==="figure") {
      return <Figurine/>;
    }else if(Navigation==="paint"){
      return <PaintAndMod/>;
    }else if(Navigation==="submit"){
      return <Submit/>;
    }else if(Navigation==="panier"){
        return <Cart/>;
    }else if(Navigation==="sign_up"){
      return <Sign_up/>;
    }else{
      return  <div>
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
      <div id='content_bot'>
        <div className={styles.choice}>
          <div className={styles.content_collection}>
            <div className={styles.discribe}>
              <h2>Collectionne une armée</h2>
              <p>Choisisez une faction entre humain, mutant ou hérétique et commencer l'aventure warhammer.</p>
              <div onClick={()=>setNavigation("figure")} className={styles.more}>more info ...</div>
            </div>
            </div>
            <div  className={styles.content_paint}>
              <div className={styles.discribe}>
                <h2>Equipez vous pour modélisée</h2>
                <p>Prennez vos pinceaux et vos peinture citadelle il est temps de personnaliser votre propre armée.</p>
                <div onClick={()=>setNavigation("paint")} className={styles.more}>more info ...</div>
              </div>
            </div>
            <div  className={styles.content_wargame}>
              <div className={styles.discribe}>
                <h2>Il est temps de faire la guerre.</h2>
                <p>Prenez votre armée partez en croisade face à d'autres passionée de la communautée Warhammer.</p>
                <div onClick={()=>setNavigation("wargame")} className={styles.more}>more info ...</div>
              </div>
            </div>
        </div>
      </div>
    </div> 
    }
  };
  

  return (
    <main>
      <div> 
        <div className={styles.header_top}>
            <div className={styles.contact} onClick={()=>setNavigation("submit")}> 
                Nous contacter
            </div>
            <div  className={styles.header_right}>
                  <div className={styles.subscribe} onClick={()=>setNavigation("panier")}>Panier</div>
              <div className={styles.subscribe} onClick={()=>setNavigation("sign_up")}>
                  {user.username == null ? "S'inscrire / Se connecter" :"Profil"}
              </div>
            </div>
            
        </div>
        <div className={styles.header_bot}>
            <img src="/logo.png" alt="logo" className={styles.logo} />
            <form action="" method="get">
                <div>
                    <FaSearch className={styles.icon_search} />
                    <input type="text" name="search" className={styles.search_bar} onChange={(e)=>setSearch(e.target.value)} placeholder="Rechercher ici ..." />
                </div>
            </form>
            <div className={styles.language} >
                <p>FR:</p>
                <img src="/flag_french.png" alt="flag_french" className={styles.flag_fr}  />
            </div>
        </div>
    </div>
        
        
          <div className={styles.container}> 
          <div className={styles.lien}>
            <div className={styles.selection} onClick={()=>setNavigation("")}>Acceuil</div>
          </div>
            <div className={styles.lien}>
              <div className={styles.selection} onClick={()=>setNavigation("figure")}>Nos figurines</div>
          </div>
          <div className={styles.lien}>
            <div className={styles.selection} onClick={()=>setNavigation("paint")}>Peinture et modélisme</div>
          </div>
          <div className={styles.lien}>
            <div className={styles.selection} onClick={()=>setNavigation("wargame")}>Wargame</div>
          </div>
          </div>
          {content()}
          <footer className={styles.footer}>
            <div onClick={()=>setNavigation("submit")}>Nous contacter </div>
            <div onClick={()=>setNavigation("")}>Nos Nouveauté</div>
            <div>Politique de confidentialité et mentions légales</div>
            <div>&copy;HTLProjet. Tous droits réservés.</div>
          </footer>

    </main>
  )
}

export default Home;
