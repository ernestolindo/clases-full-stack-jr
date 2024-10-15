// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgTNVtRi8hZWGDD_m1bHQRPSV6qBe5YBM",
  authDomain: "auth-app-56d0c.firebaseapp.com",
  projectId: "auth-app-56d0c",
  storageBucket: "auth-app-56d0c.appspot.com",
  messagingSenderId: "452869435881",
  appId: "1:452869435881:web:062ec68e360a7d5c389b78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
