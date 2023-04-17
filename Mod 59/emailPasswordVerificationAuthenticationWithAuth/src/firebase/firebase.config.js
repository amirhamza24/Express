// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa4urWJxuWkRUGH1TZOdJcMggixHI_Ra0",
  authDomain: "email-password-auth-212d8.firebaseapp.com",
  projectId: "email-password-auth-212d8",
  storageBucket: "email-password-auth-212d8.appspot.com",
  messagingSenderId: "845366883807",
  appId: "1:845366883807:web:ab4a6fb13423684913c06a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;