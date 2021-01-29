import firebase from 'firebase/app';
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAMUHq0Ck22Y5mfkTzFL-x_C_JGE2kpk_M",
    authDomain: "game-site-63fb0.firebaseapp.com",
    projectId: "game-site-63fb0",
    storageBucket: "game-site-63fb0.appspot.com",
    messagingSenderId: "775713111060",
    appId: "1:775713111060:web:e5f907de7249c74b563b01",
    measurementId: "G-G4ZV99XWG0"
};

firebase.initializeApp(firebaseConfig);
  // Initialize Firebase
export default firebase;
