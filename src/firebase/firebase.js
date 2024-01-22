// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9WCbfNG6KTiV6f2YB_e1IPxAHjwht8a8",
  authDomain: "netflix-gpt-d88f9.firebaseapp.com",
  projectId: "netflix-gpt-d88f9",
  storageBucket: "netflix-gpt-d88f9.appspot.com",
  messagingSenderId: "1000657329148",
  appId: "1:1000657329148:web:7b0ca11483d0706238b079",
  measurementId: "G-60ZYGY551G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);