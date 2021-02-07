import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDrV-TgHMI2Lo2CtV0iO5L8o_q13tKnS4c",
    authDomain: "instagram-clone-713be.firebaseapp.com",
    databaseURL: "https://instagram-clone-713be-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-713be",
    storageBucket: "instagram-clone-713be.appspot.com",
    messagingSenderId: "373775440732",
    appId: "1:373775440732:web:995704367a8805f5dcbf99",
    measurementId: "G-NRHE2RP7X4"
  });

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const storage = firebaseApp.storage();

  export { db, auth, storage };