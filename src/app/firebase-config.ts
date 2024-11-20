// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCB7habfporcvcjTklZnZKyglgXPCwf348',
  authDomain: 'chat-app-f6b7d.firebaseapp.com',
  projectId: 'chat-app-f6b7d',
  storageBucket: 'chat-app-f6b7d.firebasestorage.app',
  messagingSenderId: '903479027960',
  appId: '1:903479027960:web:90a3caaac1dbafe7feb30d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
