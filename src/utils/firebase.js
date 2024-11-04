// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoUnShsnDWw0Zh22CLXsItlCi37eB2tF4",
  authDomain: "netflixx-gpt-f914c.firebaseapp.com",
  projectId: "netflixx-gpt-f914c",
  storageBucket: "netflixx-gpt-f914c.appspot.com",
  messagingSenderId: "666521800547",
  appId: "1:666521800547:web:a6098f5b5ff680c4b90d56",
  measurementId: "G-5Z134FXEZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();