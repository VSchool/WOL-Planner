import { initializeApp, getApps } from "@firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "@firebase/storage";
import { getAuth, GoogleAuthProvider, initializeAuth } from "firebase/auth"
import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebase from "firebase/app"

export const settings = {
  project_id: 'wol-planner-7e216',
};

const firebaseConfig = {
  apiKey: process.env.NX_API_KEY,
  authDomain: process.env.NX_AUTH_DOMAIN,
  databaseURL: process.env.NX_DATABASE_URL,
  projectId: "wol-planner-7e216",
  storageBucket: process.env.NX_STORAGE_BUCKET,
  messagingSenderId: process.env.NX_MESSAGING_SENDER_ID,
  appId: "1:1092456040603:web:83a5c56785f71e0ff81e3e",
  measurementId: process.env.NX_MEASUREMENT_ID 
};
// console.log(firebaseConfig)
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app)
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider()

// init services
// const db = getFirestore()

// collection reference
// const colRef = collection(db, "user")

//get collection data
// getDocs(colRef)
// .then((snapshot) => {
//   let user1 = []
//   snapshot.docs.forEach((doc) => {
//     user1.push({...doc.data(), id: doc.id})
//   })
//   console.log(user1)
// })
// .catch(err => {
//   console.log(err.message)
// })
