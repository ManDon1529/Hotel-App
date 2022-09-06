import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import{getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCNH7kLuNTxAHVoJKTGiFsURY0wzaN3rdQ",
  authDomain: "budget-app-b0130.firebaseapp.com",
  projectId: "budget-app-b0130",
  storageBucket: "budget-app-b0130.appspot.com",
  messagingSenderId: "942184815590",
  appId: "1:942184815590:web:b92212c7f0f6bc2ab51427",
  measurementId: "G-QVKGM2GS34"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const storage =getStorage(app)

export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export default app;
