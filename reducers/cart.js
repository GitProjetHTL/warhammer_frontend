import { createSlice } from '@reduxjs/toolkit';

//initialState correspond a l'etat qui a une valeur tableaux vide
const initialState = {
  cartItems: [],
};

//export fiendsSlice
export const cartSlice = createSlice({
    name: 'cart',//nom de l'etat
    initialState,//recuperer initialstate
    reducers: {//rentrer un fonction attendu
    addToCart: (state, action) => {
      const contentExist= state.cartItems.find(item=> item.id == action.payload.id)
      if (contentExist) {
        state.cartItems.filter(item=> item.id == action.payload.id).find(item =>item.quantite+=1)
        
        state.total = action.payload.price*state.cartItems.quantite;
      }else{
        state.cartItems.push(action.payload);
        state.total += action.payload.price; // Ajoutez le prix de l'article au prix total
      }
      //state affiche la valeur actuell et action.payload stock la valeur de l'action  
      // Ajouter un élément au panier en utilisant la méthode push
       // Créez une nouvelle copie du tableau cartItems avec le nouvel élément ajouté
    // state.cartItems = [...state.cartItems, action.payload];
      console.log("item push",state)
    },
    removeFromCart: (state, action) => {
      // console.log(initialState)
      // console.log("tata",state.cartItems);
      // console.log("titi",action);
      //verifier si le id récupérer correspond a une ID du tableau
      const itemSelected=state.cartItems.find(item=> item.id == action.payload.id);
      //si ID existe et que ca quantité est supp a 1 alors
      if (itemSelected && itemSelected.quantite > 1) {
        //selectionner l'objet sui correspond a ID
        console.log("a été retirée",state)
        state.cartItems.filter(item=> item.id == action.payload.id).find(item =>item.quantite-=1)
        // state.cartItems.find(item =>item.price-=action.payload.price)
        state.total = action.payload.price*state.cartItems.quantite;
        
      }else{
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      }
      // Retirer un élément du panier en utilisant la méthode filter
      
      console.log("cartcontent:",state.cartItems)
      // console.log("delete")
 },
}
});

export const { addToCart, removeFromCart } = cartSlice.actions; // on recupère le nom la fonction dnas le reduseur  et initie avec le nom du reduceur
export default cartSlice.reducer;//exporte ici le réduceur
