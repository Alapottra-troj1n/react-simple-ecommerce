// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF5SJs-t1UDO2RNmXA_wpQ2rvpuRcg8TU",
  authDomain: "simple-react-ecommerce-auth.firebaseapp.com",
  projectId: "simple-react-ecommerce-auth",
  storageBucket: "simple-react-ecommerce-auth.appspot.com",
  messagingSenderId: "824718639268",
  appId: "1:824718639268:web:7e0ea01983a77a60e7a631"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
