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

let returnUrl = localStorage.getItem('returnUrl');
if (returnUrl) { // i.e, not null and not empty string 
    // now returnUrl cannot be null, so it must be a string, which is valid to use in this call
    router.navigateByUrl(returnUrl);
}

export { firebase, googleAuthProvider, database as default };
