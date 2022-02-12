import { getAuth, GoogleAuthProvider,signInWithPopup } from 'firebase/auth'

export const auth = getAuth()

export const signInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    let result = null;

    try {
      await signInWithPopup(auth, googleProvider).then((userCred) => {
      // console.log(userCred.user)
      result = userCred.user
    }) 
    } catch(error){
      result = error.code;
    }

    return result
  } 


//   let signedIn = await signInWithGoogle()

//   if (signedIn.email){
//     const { email } = signedIn
//     let pastUser = await axios.get(`${API}/users/${email}`)
//     if (pastUser.data.success){
// // push 
//     } else {
//       let newUser = {email: signedIn.email}
//       let postRequest = await axios.post(`${API}/users`, newUser)
// console.log(postRequest)
//       if (postRequest.data.success){
// //push 
//       }
//     }
//   }