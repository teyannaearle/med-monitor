import axios from "axios";
import { apiURL } from "../../util/apiURL.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { signInWithGoogle, userSignOut } from "../../services/firebase";
import GoogleButton from "react-google-button";
import "./SignIn.scss";

const API = apiURL();

function SignInForm() {
  const user = useContext(UserContext);
  let navigate = useNavigate();

  const signIn = async () => {
    let signedIn = await signInWithGoogle();
    if (signedIn.email) {
      const { email } = signedIn;
      try {
        await axios
          .get(`${API}/users/${email}`, {
            headers: {
              Authorization: "Bearer " + user.token,
            },
          })
          .then((res) => {
            if (res.data.success) {
              navigate("/dashboard");
            } else {
              signUp(email);
            }
          });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const signUp = async (email) => {
    let newUser = { email };
    try {
      await axios
        .post(`${API}/users/`, newUser, {
          headers: {
            Authorization: "Bearer " + user.token,
          },
        })
        .then((res) => {
          if (res.data.success) {
            navigate("/dashboard");
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signIn">
      <p className="signIn__para">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut,
        repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit
        eaque?
      </p>
      <GoogleButton onClick={signIn} className="signIn__button" />
      <a href="#" onClick={userSignOut}>
        Sign out
      </a>
    </div>
  );
}

export default SignInForm;
