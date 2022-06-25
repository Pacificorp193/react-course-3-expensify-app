import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

const app = firebase.initializeApp(databaseURL());

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

let returnUrl = localStorage.getItem('returnUrl');
if (returnUrl) { // i.e, not null and not empty string 
    // now returnUrl cannot be null, so it must be a string, which is valid to use in this call
    router.navigateByUrl(returnUrl);
}

export { firebase, googleAuthProvider, database as default };
