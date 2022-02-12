import axios from "axios";
import { signInWithGoogle, userSignOut } from "../../services/firebase";
import GoogleButton from "react-google-button";
import "./SignIn.scss";

const API = process.env.REACT_APP_API_URL;

function SignInForm() {
  const signInOrUP = async () => {
    let signedIn = await signInWithGoogle();
    if (signedIn.email) {
      const { email } = signedIn;
      let pastUser = await axios.get(`${API}/users/${email}`);
      console.log(pastUser);
      if (pastUser.data.success) {
        // push
        console.log("not posted");
      } else {
        let newUser = { email: signedIn.email };
        let postRequest = await axios.post(`${API}/users`, newUser);
        console.log(postRequest);
        if (postRequest.data.success) {
          //push
          console.log("posted");
        }
      }
    }
  };

  return (
    <div className="signIn">
      <p className="signIn__para">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut,
        repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit
        eaque?
      </p>
      <GoogleButton onClick={signInOrUP} className="signIn__button" />
      <a href="#" onClick={userSignOut}>
        Sign out
      </a>
    </div>
  );
}

export default SignInForm;
