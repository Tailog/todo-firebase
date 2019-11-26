// Fichier de configuration pour firebase
// IMPORTANT TOUJOURS EN PREMIER
import * as firebase from 'firebase/app'
// Importation de Firestore pour utiliser la DB
import 'firebase/firestore';

// Fichier de configuration se trouvant dans les paramètres de mon app
const firebaseConfig = {
  apiKey: "AIzaSyB4APF4FSYRNroFDawlBQs0gLxvBCx5vBo",
  authDomain: "todo-3ab23.firebaseapp.com",
  databaseURL: "https://todo-3ab23.firebaseio.com",
  projectId: "todo-3ab23",
  storageBucket: "todo-3ab23.appspot.com",
  messagingSenderId: "340936291285",
  appId: "1:340936291285:web:e11cdf1796be62abaf035c",
  measurementId: "G-0B8F7JL4VJ"
};
// Initialisation de notre App
firebase.initializeApp(firebaseConfig);

// Export la db pour pouvoir l'utiliser partout dans notre projet
export const db = firebase.firestore();

export default firebase;