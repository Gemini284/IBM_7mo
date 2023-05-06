// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBLmpEjTgo_hcCAJVczanZ1QxRv11RjPn0",
    authDomain: "ibm-skillscope.firebaseapp.com",
    databaseURL: "https://ibm-skillscope-default-rtdb.firebaseio.com",
    projectId: "ibm-skillscope",
    storageBucket: "ibm-skillscope.appspot.com",
    messagingSenderId: "352586231541",
    appId: "1:352586231541:web:bfe01f725d0890910c5fbc",
    measurementId: "G-V0LHT2W9DY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);