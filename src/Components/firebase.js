// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  off,
  remove,
  update,
} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5duzTxbE2DbaD5r6vh5w1rCP0NZAVHlw",
  authDomain: "fir-project-3db84.firebaseapp.com",
  databaseURL: "https://fir-project-3db84-default-rtdb.firebaseio.com",
  projectId: "fir-project-3db84",
  storageBucket: "fir-project-3db84.appspot.com",
  messagingSenderId: "452581821276",
  appId: "1:452581821276:web:38aa739cbd680078890f99",
  measurementId: "G-GQ43F08GM5",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, onValue, off, ref, set, push, remove, update };
// const analytics = getAnalytics(app);
