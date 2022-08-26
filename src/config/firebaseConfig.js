// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
import 'firebase/firestore';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBqKfdrLEsqesgrQgmxE5dsf6bL4zyWYdM",
  authDomain: "fir-authentication-69a3d.firebaseapp.com",
  projectId: "fir-authentication-69a3d",
  storageBucket: "fir-authentication-69a3d.appspot.com",
  messagingSenderId: "446317303206",
  appId: "1:446317303206:web:2f6182aa14cc9787316b67"
};

export default firebaseConfig;
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);