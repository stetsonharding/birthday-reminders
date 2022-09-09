// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtxGzvJVf_x2lKBFs8ehqUjVAcx5WqDDU",
  authDomain: "birthday-uploads-f79b5.firebaseapp.com",
  projectId: "birthday-uploads-f79b5",
  storageBucket: "birthday-uploads-f79b5.appspot.com",
  messagingSenderId: "554809749781",
  appId: "1:554809749781:web:a5a8abd51e48ca27e1791c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
