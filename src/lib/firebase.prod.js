import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from '../seed';
// we need to somehow seed the database

//we need a config here
const config = {
  apiKey: "AIzaSyBq6B3-hoLYiw1u3y4COeuEbh0cUPevL4Y",
  authDomain: "netflix-js-11f28.firebaseapp.com",
  projectId: "netflix-js-11f28",
  storageBucket: "netflix-js-11f28.appspot.com",
  messagingSenderId: "453956547103",
  appId: "1:453956547103:web:c7c4e1c461761398c7db2a",
  measurementId: "G-NZWGK32V9S",
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };
