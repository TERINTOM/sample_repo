
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'





const firebaseConfig = {
  apiKey: "AIzaSyCYxny0eVQ1tj9r8lMhZTOm2nG0sx-EA6M",
  authDomain: "upload-image-940f6.firebaseapp.com",
  projectId: "upload-image-940f6",
  storageBucket: "upload-image-940f6.appspot.com",
  messagingSenderId: "716053847963",
  appId: "1:716053847963:web:8a6dc707089206b71c4b3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)