import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB8jFb2qqjqGN6Neon4RfL0wNdYYy3sWyg",
    authDomain: "tienda-montessori.firebaseapp.com",
    projectId: "tienda-montessori",
    storageBucket: "tienda-montessori.appspot.com",
    messagingSenderId: "208871739742",
    appId: "1:208871739742:web:b2164fe7050c26f718bfcf"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)