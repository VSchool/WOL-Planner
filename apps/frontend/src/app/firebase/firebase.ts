import { initializeApp } from "@firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "@firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

export const settings = {
  project_id: 'wol-planner-7e216',
};

const firebaseConfig = {
  apiKey: "AIzaSyBBiN0i2T47tZkQmVwRcp7TAdtKESP5aQ8",
  authDomain: "wol-planner-7e216.firebaseapp.com",
  databaseURL: "https://wol-planner-7e216-default-rtdb.firebaseio.com",
  projectId: "wol-planner-7e216",
  storageBucket: "wol-planner-7e216.appspot.com",
  messagingSenderId: "1092456040603",
  appId: "1:1092456040603:web:83a5c56785f71e0ff81e3e",
  measurementId: "G-J1J4WPZG89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()