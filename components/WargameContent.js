import styles from '../styles/WargameContent.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToCart } from '../reducers/cart';
import Sign_up from './Sign_up';

function WargameContent(props) {
  
  const dispatch = useDispatch();
  const user= useSelector((state) => state.user.value);
  
  const cartItems = useSelector((state) => state.cart.cartItems);
  
  const [connected,setConnected]=useState(null)


  const handleAddToCart = (e) => {
    // Créez un objet représentant les détails du produit
    const product = {
      id:props.id,
      name: props.name,
      img: props.img,
      price: props.price,
      description: props.description,
      quantite:0,
    };
    console.log(product);
    dispatch(addToCart(product));
    // console.log(cartItems)
  };
  
  const handleRedirection=(e)=>{
    setConnected(false)
    
}

  let Cart="";



// if (user.username==null) {
//   Cart=( <input className={styles.button} type="button" value="Ajouter au panier" onClick={e =>handleRedirection()}></input>)       
// }else{
  Cart=( <input className={styles.button} type="button" value="Ajouter au panier" onClick={e => handleAddToCart(e)}></input>)     
// }





  return (
    <>
     <div className={styles.content} >
      <div className={styles.content_top}>
        <h2>{props.name}</h2>
        <img src={props.img} alt={props.name} className={styles.img}  />
      </div>
        <div className={styles.content_bot}>
          <div>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.price}>{props.price}€</div>
          </div>
          {Cart}
        </div>
      </div>
    </>
  );
}

export default WargameContent;
