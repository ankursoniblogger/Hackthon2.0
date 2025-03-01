// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBA-55v2zxy4rLGn0Xr6cOlU_n_baSxJBk",
//   authDomain: "hoperp-4.firebaseapp.com",
//   projectId: "hoperp-4",
//   storageBucket: "hoperp-4.firebasestorage.app",
//   messagingSenderId: "801869948229",
//   appId: "1:801869948229:web:c240bead1ff7a9022e0a2c"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// export { auth, provider, signInWithPopup };


// Import Firebase services
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore"; // Firestore ke liye

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBA-55v2zxy4rLGn0Xr6cOlU_n_baSxJBk",
  authDomain: "hoperp-4.firebaseapp.com",
  projectId: "hoperp-4",
  storageBucket: "hoperp-4.firebasestorage.app",
  messagingSenderId: "801869948229",
  appId: "1:801869948229:web:c240bead1ff7a9022e0a2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app); // Firestore initialize kiya

export { auth, provider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, db, doc, setDoc };
