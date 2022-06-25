import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPZw5IzkroUh_P4B7-FXUESrBZtBbmCr4",
  authDomain: "gavin-expensify-app.firebaseapp.com",
  databaseURL: "https://gavin-expensify-app-default-rtdb.firebaseio.com",
  projectId: "gavin-expensify-app",
  storageBucket: "gavin-expensify-app.appspot.com",
  messagingSenderId: "736152791663",
  appId: "1:736152791663:web:973928a2658fbeaa9a3b9a"
};

const app = firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
