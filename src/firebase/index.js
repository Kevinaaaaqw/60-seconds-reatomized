import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdcZbzoA2xxJBNI9nTWFuyeEeoftOOAEw",
    authDomain: "thealldata-c75de.firebaseapp.com",
    databaseURL: "https://thealldata-c75de-default-rtdb.firebaseio.com",
    projectId: "thealldata-c75de",
    storageBucket: "thealldata-c75de.appspot.com",
    messagingSenderId: "378414104120",
    appId: "1:378414104120:web:9eef6aa0890c70cd08b0cd",
    measurementId: "G-ZY7CL2ZDHV"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app); // 這裡獲取數據庫實例
// Initialize Firebase Authentication
export const auth = getAuth(app);
