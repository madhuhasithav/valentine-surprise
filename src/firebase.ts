import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJJ975AMBClbBrx0uk4sHS6zAfGdrXmWo",
  authDomain: "valentine-bf.firebaseapp.com",
  projectId: "valentine-bf",
  storageBucket: "valentine-bf.firebasestorage.app",
  messagingSenderId: "238307447084",
  appId: "1:238307447084:web:7bb1d237f5f2a140e1dc89",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
