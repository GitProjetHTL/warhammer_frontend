import '../styles/globals.css';
import Head from 'next/head';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import user from '../reducers/user'; //importe ici le reduceur et on appel avec son meme nom
import cart from '../reducers/cart'; 

const store = configureStore({
 reducer: 
 {user,cart
},//ajouter ici le reduceur
});
            

function App({ Component, pageProps }) {
  return (
    <>
     <Provider store={store}>
      <Head>
          <title>My Next.js App</title>
        </Head>
        <Component {...pageProps} />
    </Provider>
    </>
  );
}

export default App;
 