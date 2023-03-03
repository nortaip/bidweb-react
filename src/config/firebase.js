// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8x7lwE4MrQY2ldn-efdzbx7v9RZFEVB0",
  authDomain: "noauctionaz.firebaseapp.com",
  projectId: "noauctionaz",
  storageBucket: "noauctionaz.appspot.com",
  messagingSenderId: "289096768885",
  appId: "1:289096768885:web:a10dcf8a339061f8ad473c",
  measurementId: "G-RD0HHE88PZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);