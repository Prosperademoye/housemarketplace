import { initializeApp } from "firebase/app";
import {getFireStore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBwUEOM8dz0tOWvze_7VuEdE6Vc9Uw8S-k",
  authDomain: "housemarketplace-ecd3f.firebaseapp.com",
  projectId: "housemarketplace-ecd3f",
  storageBucket: "housemarketplace-ecd3f.appspot.com",
  messagingSenderId: "589164925857",
  appId: "1:589164925857:web:0b6368483bb93a70a331e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore ()