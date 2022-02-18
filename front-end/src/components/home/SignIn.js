import axios from "axios";
import { apiURL } from "../../util/apiURL.js";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, userSignOut } from "../../services/firebase";
import GoogleButton from "react-google-button";
import "./SignIn.scss";

const API = apiURL();

function SignInForm() {
  let navigate = useNavigate();

  const signInOrUP = async () => {
    let signedIn = await signInWithGoogle();
    if (signedIn.email) {
      const { email } = signedIn;
      let pastUser = await axios.get(`${API}/users/${email}`);
      if (pastUser.data.success) {
        navigate("/dashboard");
      } else {
        let newUser = { email: signedIn.email };
        let postRequest = await axios.post(`${API}/users/`, newUser);
        if (postRequest.data.success) {
          navigate("/dashboard");
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
