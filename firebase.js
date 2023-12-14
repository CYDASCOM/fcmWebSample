// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-UpcuJYqS75Nw2_nATZ-i6z9OdpQ3ETE",
  authDomain: "cydas-member-stg-ee2e7.firebaseapp.com",
  databaseURL: "https://cydas-member-stg-ee2e7-default-rtdb.firebaseio.com",
  projectId: "cydas-member-stg-ee2e7",
  storageBucket: "cydas-member-stg-ee2e7.appspot.com",
  messagingSenderId: "458758423846",
  appId: "1:458758423846:web:ca952d1116efb5f43dade7",
  measurementId: "G-JHR9H7BLDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);