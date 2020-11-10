import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVfNZlPvZE434XHncDxO3ntEwOMegCRMg",
  authDomain: "picle-zines.firebaseapp.com",
  databaseURL: "https://picle-zines.firebaseio.com",
  projectId: "picle-zines",
  storageBucket: "picle-zines.appspot.com",
  messagingSenderId: "882248601877",
  appId: "1:882248601877:web:0c18c82a1b8975082b991c",
  measurementId: "G-58G3VFMH8Z"
};
if (!firebase.apps.length) {
  // to aviod error of default app already exists
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const storage = firebase.storage();
export {db};
export default storage;
