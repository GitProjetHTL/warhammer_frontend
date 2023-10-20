import { createSlice } from '@reduxjs/toolkit';

//initialState correspond a l'etat qui a une valeur tableaux vide
const initialState = {
    value: [],
};

//export fiendsSlice
export const allProductSlice = createSlice({
    name: 'allProduct',//nom de l'etat
    initialState,//recuperer initialstate
    reducers: {//rentrer un fonction attendu
    allProduct: (state, action) => {//state affiche la valeur actuell et action.payload stock la valeur de l'action  
      state.value.push(action.payload)
      console.log("ajouter")
    },

  
 },
});

export const { allProduct } = allProductSlice.actions; // on recupère le nom la fonction dnas le reduseur  et initie avec le nom du reduceur
export default allProductSlice.reducer;//exporte ici le réduceur
