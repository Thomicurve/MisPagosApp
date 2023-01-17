import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";
import app from './config';

const db = getFirestore(app);
const auth = getAuth(app);

const checkError = (errorMsg) => {
  if (errorMsg.includes("email-already-in-use")) {
    return 'El correo electrónico ya se encuentra en uso.'
  } else if (errorMsg.includes("wrong-password")) {
    return 'Contraseña incorrecta.'
  } else if (errorMsg.includes("user-not-found")) {
    return 'El correo introducido no existe.'
  }
}

const createUserIntoDB = async (userData) => {
  try {
    const { email, fullname } = userData;
    await addDoc(collection(db, "users"), { email, fullname });
  } catch (error) {
    throw new Error(error);
  }
}

const registerNewUser = async (userData, navigate) => {
  try {
    await createUserWithEmailAndPassword(auth, userData.email, userData.password)
    await createUserIntoDB(userData);
    Swal.fire({
      title: 'Usuario registrado correctamente!',
      icon: 'success'
    })
    navigate('/login')
  } catch (error) {
    const errorMessage = checkError(error.message)
    Swal.fire({
      title: 'Error al registrar el usuario',
      icon: 'error',
      text: errorMessage
    })
    throw new Error(error);
  }
}

const login = async (loginData, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
    Swal.fire({
      title: 'Inicio de sesión correcto!',
      icon: 'success'
    })
    navigate('/home');
  } catch (error) {
    const errorMessage = checkError(error.message)
    Swal.fire({
      title: 'Error al iniciar sesión',
      icon: 'error',
      text: errorMessage
    })
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