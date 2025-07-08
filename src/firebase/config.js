import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOJ9TERweeDkRw7y97CsogHqui_gN8gio",
  authDomain: "booksstoredatabase.firebaseapp.com",
  projectId: "booksstoredatabase",
  storageBucket: "booksstoredatabase.firebasestorage.app",
  messagingSenderId: "116890396450",
  appId: "1:116890396450:web:213a4d699a48f27951e77b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db
