import styles from '../styles/Cart.module.css';
import React, { useEffect,useState } from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { removeFromCart } from "../reducers/cart"
import Figurine from "./Figurine"

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [priceTotal,setPriceTotal]=useState("");

  useEffect(() => {
    // Calculez le prix total directement dans l'effet
    const total = cartItems.reduce((acc, item) => acc + item.price*item.quantite, 0);
    setPriceTotal(total);
  }, [cartItems]);

  const handleDelete = (item) => {
    dispatch(removeFromCart(item));
  };

  // Vous pouvez générer le contenu du panier directement ici

  const content="";
  
  if (priceTotal==0) {
    content = <div ClassName={styles.empty}> votre panier est vide </div> 
  }else{
  content = cartItems.map((item, index) => (


    <div key={index} className={styles.content}>
      <div className={styles.content_left}>
        <div>
        <h2>{item.name}</h2>
          <img src={item.img} alt={item.name} className={styles.img} />
        </div>
      </div>
      <div className={styles.content_right}>
        <div>{item.description}</div>
      </div>
      <div className={styles.content_delete}>
        <div className={styles.price}>Prix: {item.price*item.quantite}€</div>
        <div className={styles.quantite}>Quantité: {item.quantite}</div>
        <button onClick={() => handleDelete(item)} className={styles.delete}>
          Retirer du panier
        </button>
      </div>
    </div>
  ));

}
  return (
    <div>
      <h2>Panier</h2>
      <div  className={styles.all_content}>
        <div>{content}</div>
      </div>
        <div className={styles.content_bot}>
          <div>Montant Total:</div>
          <div>{priceTotal}€</div>
        </div>
        <button>Passer au paiement</button>
    </div>
  );
};

export default Cart;