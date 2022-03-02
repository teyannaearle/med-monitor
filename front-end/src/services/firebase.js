import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"

export const auth = getAuth()

export const signInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    let result = null;

    try {
      await signInWithPopup(auth, googleProvider).then((userCred) => {
      result = userCred.user
    }) 
    } catch(error){
      result = error.code;
    }
    return result
  } 

  export const userSignOut = async () => {
    let result = null;
    try {
      await signOut(auth).then(() => {
        console.log("signed out")
      });
    } catch (error) {
      result = error.code;
    }
    return result;
  };