import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRABASE_API_KEY,
  authDomain: process.env.REACT_APP_FIRABASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIRABASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRABASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRABASE_MESSAGING_SENDER ,
  appId: process.env.REACT_APP_FIRABASE_APP_ID 
};
//console.log(firebaseConfig,"<<<<<<")

const app = initializeApp(firebaseConfig);