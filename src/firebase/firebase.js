import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAk3ZkV_6oNAKFJMJnw9NYqy-TooJSCyo",
  authDomain: "practicalexam-33ed1.firebaseapp.com",
  projectId: "practicalexam-33ed1",
  storageBucket: "practicalexam-33ed1.firebasestorage.app",
  messagingSenderId: "129103885592",
  appId: "1:129103885592:web:c29ba3eaf8ad852c4fda6d",
  measurementId: "G-94Z6V57CEP",
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
