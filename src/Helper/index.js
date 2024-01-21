// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDomOhdI-FBleIjQ0kCRn-TsW3Nq92G0Yo",
    authDomain: "theauctionbids.firebaseapp.com",
    projectId: "theauctionbids",
    storageBucket: "theauctionbids.appspot.com",
    messagingSenderId: "1020867008982",
    appId: "1:1020867008982:web:a8d56cd8c3df75975d6c77",
    measurementId: "G-9EG1QTJ9H5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { analytics }