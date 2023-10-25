import styles from '../styles/Sign_up.module.css';
import { useDispatch , useSelector  } from "react-redux";
import { login , logout } from "../reducers/user";
import { useState} from 'react';


export default function Sign_up() {

let user=useSelector(state => state.user.value);


const dispatch = useDispatch();
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);
const [subscribe,setSubscribe]=useState(false)

const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  username: '',
  password: '',
  email: '',
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};


const handleSignIn = (e) => {
  e.preventDefault();
  // Vous pouvez traiter les données du formulaire ici
  console.log('Données soumises :', formData);
  // Réinitialisez le formulaire après soumission
  setFormData({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    email: '',
  });

  //faire un back des personnes qui crée un utilisateur<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
};


  console.log(user)
  console.log(error)


  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSub =()=>{
    setSubscribe(true)
  }

  const handleSignUp =()=>{
    setSubscribe(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page par défaut

    fetch(`https://warhammer-backend.vercel.app/user/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          const userId = data.userId;
          dispatch(
            login({
              token: data.token,
              username: data.username,
              userId: userId,
            })
          );
          setPassword("");
          setUsername("");
          setError(false)
        } else {
          setError(true);
        }
      })
      // .catch((error) => {
      //   console.error("Une erreur s'est produite lors de la requête Fetch : ", error);
      //   setError("Une erreur s'est produite. Veuillez réessayer."); // Message d'erreur générique
      // });
  };

  
   let submit=null;
   


    if(subscribe==true) {
      submit=( 
      <div className={styles.presentation}>
        <div className={styles.content_presentation}>
         <h2>Inscription</h2>
         <form onSubmit={handleSignIn}>
           <div className={styles.form_sign_in}>
             <label htmlFor="firstName">Prénom :</label>
             <input
               type="text"
               id="firstName"
               name="firstName"
               value={formData.firstName}
               onChange={handleChange}
               required
             />
           </div>
           <div className={styles.form_sign_in}>
             <label htmlFor="lastName">Nom :</label>
             <input
               type="text"
               id="lastName"
               name="lastName"
               value={formData.lastName}
               onChange={handleChange}
               required
             />
           </div>
           <div className={styles.form_sign_in}>
             <label htmlFor="username">Nom d'utilisateur :</label>
             <input
               type="text"
               id="username"
               name="username"
               value={formData.username}
               onChange={handleChange}
               required
             />
           </div>
           <div className={styles.form_sign_in}>
             <label htmlFor="password">Mot de passe :</label>
             <input
               type="password"
               id="password"
               name="password"
               value={formData.password}
               onChange={handleChange}
               required
             />
           </div>
           <div className={styles.form_sign_in}>
             <label htmlFor="email">Adresse e-mail :</label>
             <input
               type="email"
               id="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               required
             />
           </div>
           <br />
           <div>
             <button type="submit">S'inscrire</button>
           </div>
         </form>
         <br />
         <br />
         <button type="submit" onClick={()=> handleSignUp()}>
                     J'ai déja un compte, je souhaite me connecter
                   </button>
       </div>
       </div>

      )
    }else if(user.username==null){
        if (error!=false) {
          submit=(
            <div className={styles.content_presentation}>
                <div>Pseudo</div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      placeholder="Nom d'utilisateur"
                      value={username}
                      onChange={handleUsernameChange}
                      />
                  </div>
                    <div>Mot de passe</div>
                  <div>
                    <input
                      type="password"
                      placeholder="Mot de passe"
                      value={password}
                      onChange={handlePasswordChange}
                      />
                  </div>
                  <div>
                    <button type="submit">Se connecter</button>
                  </div>
                </form>
                <div>
                {error && <p>"Une erreur s'est produite. Veuillez réessayer."</p>}
                </div>
                <br />
                <br />
                <button type="submit" onClick={()=> handleSub()}>
                  Je n'ai pas de compte je m'inscrit 
                </button>
              </div>
              )
            }else if(user && user.username){
          submit=(
            <div className={styles.content_presentation}>
          <div>
          <p>Bienvenue {user.username} </p>
          </div>
          </div>
            )
        }else{
          submit=(
            <div className={styles.content_presentation}>
                <div>Pseudo</div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      placeholder="Nom d'utilisateur"
                      value={username}
                      onChange={handleUsernameChange}
                      />
                  </div>
                  <div>Mot de passe</div>
                  <div>
                    <input
                      type="password"
                      placeholder="Mot de passe"
                      value={password}
                      onChange={handlePasswordChange}
                      />
                  </div>
                  <div>
                    <button type="submit">Se connecter</button>
                  </div>
                  <br />
                  <br />
                  <button type="submit" onClick={()=> handleSub()}>
                  Je n'ai pas de compte je m'inscrit
                </button>
                </form>
              </div>
            )
        }
}else{
  submit=(
    <div className={styles.content_presentation}>
  <div>
  <p>Bienvenue {user.username} </p>
  </div>
        <div onClick={()=>handleDelete()}>
            <button type="submit">Se deconnecter</button>
        </div>
  </div>
    )
  }
  
  const handleDelete =()=>{
    dispatch(logout())
  }

  return (
    <div>
      <div className={styles.presentation}>
        {submit}
        
      </div>
      <div id='content_bot'></div>
    </div>
  );
}
    
