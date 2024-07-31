// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "apikey-here",
  authDomain: "website-auth-domain-here",
  projectId: "project-id-here",
  storageBucket: "project-storage-bucket-here",
  messagingSenderId: "messageing-sender-id-here",
  appId: "app-id-here",
  measurementId: "measureemnt-id-here"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
