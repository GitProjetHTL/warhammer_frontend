import styles from '../styles/WargameContent.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToCart } from '../reducers/cart';
import Sign_up from './Sign_up';
import Modal from 'react-modal'; // Importez react-modal

function WargameContent(props) {
  
  const dispatch = useDispatch();
  const user= useSelector((state) => state.user.value);
  
  const cartItems = useSelector((state) => state.cart.cartItems);
  
  const [connected,setConnected]=useState(null)
  //etat sur la modal
  const [isModalOpen, setIsModalOpen] = useState(false);

 
  const closeModal = () => {
    setIsModalOpen(false);
  };
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
    setIsModalOpen(true);
  };
  
  const handleRedirection=(e)=>{
    setConnected(false)
    
}

  let Cart="";



// if (user.username==null) {
//   Cart=( <input className={styles.button} type="button" value="Ajouter au panier" onClick={e =>handleRedirection()}></input>)       
// }else{
  Cart=( <input className={styles.button} type="button" value="Ajouter au panier" onClick={e => handleAddToCart(e)} ></input>)     
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
        
          <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              contentLabel="Ajouter un élément" // Label de contenu pour accessibilité
              style={{
                overlay: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(255, 255, 255, 0.75)',
                },
                content: {
                  position: 'relative',
                  top: 'auto',
                  left: 'auto',
                  right: 'auto',
                  bottom: 'auto',
                  border: '1px solid #ccc',
                  background: '#fff',
                  overflow: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '4px',
                  outline: 'none',
                  maxWidth: '600px', // Ajustez la largeur selon vos besoins
                  padding: '20px',
                },
              }}
            >
              {/* Contenu de la modal */}
              <h2>Vous avez rajouter ce produit à votre panier</h2>
              {/* Ajoutez ici le formulaire ou le contenu que vous souhaitez afficher */}
              <button onClick={closeModal}>Fermer</button>
          </Modal> 
      </div>
    </>
  );
}

export default WargameContent;
