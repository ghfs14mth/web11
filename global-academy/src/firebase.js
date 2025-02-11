import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB8z2hmhbcM83GywmmuO9OJAE76AOQWksc",
  authDomain: "global-academy-4921f.firebaseapp.com",
  databaseURL: "https://global-academy-4921f-default-rtdb.firebaseio.com",
  projectId: "global-academy-4921f",
  storageBucket: "global-academy-4921f.firebasestorage.app",
  messagingSenderId: "32190703508",
  appId: "1:32190703508:web:48a0f6b82220ad56761181",
  measurementId: "G-93S78FF8BL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };