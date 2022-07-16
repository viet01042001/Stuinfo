import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQCW1k047-yu58Jhk53grjF5monZHvRlg",
  authDomain: "stuinfo-ca9f1.firebaseapp.com",
  databaseURL: "https://stuinfo-ca9f1-default-rtdb.firebaseio.com",
  projectId: "stuinfo-ca9f1",
  storageBucket: "stuinfo-ca9f1.appspot.com",
  messagingSenderId: "275195866697",
  appId: "1:275195866697:web:969c12bb31a8dda9c45998",
  measurementId: "G-PYJLVBSS1F"
};

const app = initializeApp(firebaseConfig);;
export const db = getFirestore(app);