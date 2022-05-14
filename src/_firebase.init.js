// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6pV1VOV8rVtcNy8nE2i_bphN-8ITw4GI",
  authDomain: "doctorsportal-68241.firebaseapp.com",
  projectId: "doctorsportal-68241",
  storageBucket: "doctorsportal-68241.appspot.com",
  messagingSenderId: "928462123971",
  appId: "1:928462123971:web:435ea7c6ecf360db2b8376",
  measurementId: "G-YM3L7X91XT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

export default auth;