// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXFjCKu4kUIcCTrnl97RLdbivihuJZvQs",
  authDomain: "culichi-tours.firebaseapp.com",
  databaseURL: "https://culichi-tours-default-rtdb.firebaseio.com",
  projectId: "culichi-tours",
  storageBucket: "culichi-tours.appspot.com",
  messagingSenderId: "828123271985",
  appId: "1:828123271985:web:dc981432be9f72e6d71610",
  measurementId: "G-RHMGXF6NES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);