import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBgeXxOUuAGKfXWJFmhkoiSrDQMdAakZt0",
    authDomain: "clone-42bff.firebaseapp.com",
    projectId: "clone-42bff",
    storageBucket: "clone-42bff.appspot.com",
    messagingSenderId: "900749595371",
    appId: "1:900749595371:web:56784161adfb2f7d24a4ae",
    measurementId: "G-GC5GF49Q4Z"
  };

  //initialize firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  //initialize database
  const db = firebaseApp.firestore()

  //initilaizse auth
  const auth = firebase.auth();

  export { db, auth };
