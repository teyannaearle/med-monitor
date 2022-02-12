import React from 'react'
import { signInWithGoogle } from '../../services/firebase'
import 'firebase/auth'
import "./SignIn.scss"
import axios from 'axios'
const API = process.env.REACT_APP_API_URL;


function SignInForm() {

  const signInOrUP = async () => {
    let signedIn = await signInWithGoogle()
    if (signedIn.email){
      const { email } = signedIn
      let pastUser = await axios.get(`${API}/users/${email}`)
      console.log(pastUser)
      if (pastUser.data.success){
// push 
console.log("not posted")
      } else {
        let newUser = {email: signedIn.email}
        let postRequest = await axios.post(`${API}/users`, newUser)
console.log(postRequest)
console.log("posted")
        if (postRequest.data.success){
//push 
        }
      }
    }

  }

  return (
    <div className='signIn'>
    <p className='signIn__para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
    <div className='g-signin2'  data-longtitle='true' data-theme='dark' data-width='100%' onClick={signInWithGoogle}> </div>
    <button onClick={signInOrUP} > Sign In With Google </button>
    </div>
  )
}

export default SignInForm