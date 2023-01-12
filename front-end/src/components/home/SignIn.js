import axios from "axios";
import { apiURL } from "../../util/apiURL.js";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { UserContext } from "../../providers/UserProvider";
import { signInWithGoogle } from "../../services/firebase";
import GoogleButton from "react-google-button";
import "./SignIn.scss";

const API = apiURL();

function SignInForm() {
  // const user = useContext(UserContext);
  let navigate = useNavigate();

  const signIn = async () => {
    let signedIn = await signInWithGoogle();
      const { email , accessToken } = signedIn;
      try {
        await axios
          .get(`${API}/users/${email}`, {
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          })
          .then((res) => {
            if (res.data.success) {
              localStorage.setItem("loggedIn", true)
              navigate("/dashboard");
            } else {
              signUp(email, accessToken);
            }
          });
      } catch (error) {
        console.error(error);
      }
  };

  const signUp = async (email, accessToken) => {
    let newUser = { email };
    try {
      await axios
        .post(`${API}/users/`, newUser, {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        })
        .then((res) => {
          if (res.data.success) {
            localStorage.setItem("loggedIn", true)
            navigate("/dashboard");
          }
        });
    } catch (error) {
      console.error(error);
    }
  };  

  return (
    <div className="signIn">
      <h1>Med&middot;Monitor</h1>
      <p className="signIn__para">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut,
        repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit
        eaque?
      </p>
      <GoogleButton onClick={signIn} className="signIn__button" />
    </div>
  );
}

export default SignInForm;
