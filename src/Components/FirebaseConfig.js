import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBuNp41KysILWqLu4Yv91YrmwX64dbFG5Y",
  authDomain: "richpaneltask-9102.firebaseapp.com",
  projectId: "richpaneltask-9102",
  storageBucket: "richpaneltask-9102.appspot.com",
  messagingSenderId: "889569378231",
  appId: "1:889569378231:web:fab7d028a052e4b3523232"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);