import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDMM_Sjx0wWbeLqKXu4BTfj4kSqmSJbwFk",
  authDomain: "klothes-db.firebaseapp.com",
  databaseURL: "https://klothes-db.firebaseio.com",
  projectId: "klothes-db",
  storageBucket: "klothes-db.appspot.com",
  messagingSenderId: "80880318394",
  appId: "1:80880318394:web:c2f6bb853e8d21c7960f83",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
