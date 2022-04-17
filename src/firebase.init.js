// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB43OQ7QTKsznVNISGXhvvKwJBYCO8wa7U",
    authDomain: "guitar-tutor-assignment.firebaseapp.com",
    projectId: "guitar-tutor-assignment",
    storageBucket: "guitar-tutor-assignment.appspot.com",
    messagingSenderId: "641219077607",
    appId: "1:641219077607:web:c0b3da8cbdef9a1c888942"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;