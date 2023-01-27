// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv2Vhf1tTYu8_DVMMo1YEk6Sd2Cmm3i64",
  authDomain: "lucommunity-forum-verification.firebaseapp.com",
  projectId: "lucommunity-forum-verification",
  storageBucket: "lucommunity-forum-verification.appspot.com",
  messagingSenderId: "162953602171",
  appId: "1:162953602171:web:8050e363e59232f602eede",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const storage = getStorage(app);
export { auth, storage };
