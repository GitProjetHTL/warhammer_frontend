import styles from '../styles/Cart.module.css';
import React, { useEffect,useState } from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { removeFromCart } from "../reducers/cart"
import Figurine from "./Figurine"

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.user.value) ;
  // console.log(user)
  const dispatch = useDispatch();
  const [content, setContent] = useState([]);
  const[priceTotal,setPriceTotal]=useState(0)


let cartContent="";


    cartContent=(
      <div>
        <h2>Panier</h2>
          <div>
            <div>{content}</div>
            <div className={styles.content_bot}>
              <div>Montant Total:</div>
              <div>{priceTotal}€</div>
            </div>
              <button>Passer au payement</button>
          </div>
      </div>)
  


useEffect(() => {


    // Vous pouvez directement mettre la logique de génération de contenu ici
      const content = cartItems.map((item, index) => (
        <div key={index} className={styles.content}>
          <div className={styles.content_left}>
            <div >
              <img src={item.img} alt={item.name} className={styles.img} />
            </div>
          </div>
          <div className={styles.content_right}>
            <h2>{item.name}</h2>
            <div>{item.description}</div>
          </div>
          <div className={styles.content_delete}>
            <div className={styles.price}>Prix: {item.price}€</div>
            <div className={styles.quantite}>Quantité: {item.quantite}</div>
            <button onClick={(e)=>handleDelete(e,item)} className={styles.delete}>retirer du panier</button>
          </div>
        </div>
      ));
      // Utilisez la state locale pour stocker le contenu
      const total = cartItems.reduce((acc, item) => acc + item.price, 0);
        setPriceTotal(total);
      setContent(content);

  
  }, [cartItems]);


  const handleDelete= (e,item) =>{
   
    dispatch(removeFromCart(item))
    
  }

  // Utilisez un état local pour stocker le contenu
// console.log(cartItems)



  return (
    <>
      {cartContent}
    </>
  );
};

export default Cart;
