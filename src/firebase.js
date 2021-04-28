// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAL3QA5EI11tDZO2xp9qWtOMzG7zNLbjK4",
    authDomain: "whatsapp-clone-693f1.firebaseapp.com",
    projectId: "whatsapp-clone-693f1",
    storageBucket: "whatsapp-clone-693f1.appspot.com",
    messagingSenderId: "164190501240",
    appId: "1:164190501240:web:05a1317fc4e1e495b2b08d",
    measurementId: "G-54TJH1RQH6"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;
