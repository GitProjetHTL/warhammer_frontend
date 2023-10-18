import { createSlice } from '@reduxjs/toolkit';

//initialState correspond a l'etat qui a une valeur tableaux vide
const initialState = {
    value: { 
        token: null, 
        username: null, 
        email: null, 
        password: null,
        },
};

//export fiendsSlice
export const userSlice = createSlice({
    name: 'user',//nom de l'etat
    initialState,//recuperer initialstate
    reducers: {//rentrer un fonction attendu
    newUser: (state, action) => {//state affiche la valeur actuell et action.payload stock la valeur de l'action  
        state.value.username = action.payload.username;
      state.value.email = action.payload.email; 
      state.value.token = action.payload.token;
      state.value.password = action.payload.password;
    },

    login: (state, action) => {
        state.value.token = action.payload.token;
        state.value.username = action.payload.username; 
      },
      
      logout: (state) => {
        state.value.token = null;
        state.value.username = null;
      },
 },
});

export const { newUser, login, logout } = userSlice.actions; // on recupère le nom la fonction dnas le reduseur  et initie avec le nom du reduceur
export default userSlice.reducer;//exporte ici le réduceur
