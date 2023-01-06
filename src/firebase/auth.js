import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import app from './config';

const db = getFirestore(app);
const auth = getAuth(app);

const createUserIntoDB = async (userData) => {
  try {
    const { email, fullname } = userData;
    await addDoc(collection(db, "users"), { email, fullname });
  } catch (error) {
    throw new Error(error);
  }
}

const registerNewUser = async (userData) => {
  try {
    await createUserWithEmailAndPassword(auth, userData.email, userData.password)
    await createUserIntoDB(userData);
    console.log("cuenta creada")
  } catch (error) {
    throw new Error(error);
  }
}

const login = async (loginData) => {
  try {
    await signInWithEmailAndPassword(auth, loginData.email, loginData.password)
  } catch (error) {
    throw new Error(error);
  }
}

const verifyUserSession = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}


export { registerNewUser, login, verifyUserSession }