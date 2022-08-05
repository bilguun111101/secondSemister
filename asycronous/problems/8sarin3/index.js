import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA55p_oWvzLx8B7NFn6pGaP1kfBaYWuDXU",
  authDomain: "storage-tutorial-356f4.firebaseapp.com",
  projectId: "storage-tutorial-356f4",
  storageBucket: "storage-tutorial-356f4.appspot.com",
  messagingSenderId: "230489106386",
  appId: "1:230489106386:web:212d981100db79588f0a0b",
  measurementId: "G-3YSQ88ZNQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);