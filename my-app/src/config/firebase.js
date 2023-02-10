// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Constants from 'expo-constants';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtlPmqz5-ro0W2mXuABo6VypH_y3Qht9A",
    authDomain: "money-manger-8c5ba.firebaseapp.com",
    projectId: "money-manger-8c5ba",
    storageBucket: "money-manger-8c5ba.appspot.com",
    messagingSenderId: "793470433428",
    appId: "1:793470433428:web:7267d7ecd646a6a69d1c81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;