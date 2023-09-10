
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAhOTv-DcCbEmt7jnpO7vst-yR7o9zl14A",
  authDomain: "netflix-project-d801d.firebaseapp.com",
  projectId: "netflix-project-d801d",
  storageBucket: "netflix-project-d801d.appspot.com",
  messagingSenderId: "715947562155",
  appId: "1:715947562155:web:923d4b01e59a5095ed53ee",
  measurementId: "G-NVGPGREG3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)