import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {

    apiKey: "AIzaSyCPkFicwBYOAzWjQ6ua_sKEn4OhIe9iQO0",
    authDomain: "willy-fcee5.firebaseapp.com",
    projectId: "willy-fcee5",
    storageBucket: "willy-fcee5.appspot.com",
    messagingSenderId: "804847566697",
    appId: "1:804847566697:web:fc66f21df65f084ee087f8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
