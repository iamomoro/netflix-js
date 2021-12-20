import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyD-N9lFYADKVC52tuIyBHMSUugwKgwEPPk",
  authDomain: "netflix-js-386b7.firebaseapp.com",
  databaseURL: "https://netflix-js-386b7.firebaseio.com",
  projectId: "netflix-js-386b7",
  storageBucket: "netflix-js-386b7.appspot.com",
  messagingSenderId: "644781794672",
  appId: "1:644781794672:web:40b4bef54ff6fd24491bb5",
  measurementId: "G-ZCWF2CJDM3",
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };
