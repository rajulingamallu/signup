import React, { useContext, useState } from "react";
import "../Login/Login.css";
import { Link, useNavigate } from "react-router-dom";
import {
  FacebookRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
// import { auth, provider } from "../../firebase";
// import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import { AuthContext } from "./../../context/AuthContext";
import imagee from '../Assets/Images/1.png'
const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [toggleEye, setToggleEye] = useState(false);
  const [inputType, setInputType] = useState("password");
//   const navigate = useNavigate();
const history = useNavigate();

//   const { dispatch } = useContext(AuthContext);

  const handleToggle = (e) => {
    setToggleEye(!toggleEye);
    setInputType(inputType === "password" ? "text" : "password");
  };
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     dispatch({ type: "LOGIN_START" });
//     try {
//       signInWithEmailAndPassword(auth, inputs.email, inputs.password).then(
//         (userCredential) => {
//           // Signed in
//           const user = userCredential.user;
//           dispatch({ type: "LOGIN_SUCCESS", payload: user });
//           // console.log(user);
//           navigate("/");
//         }
//       );
//     } catch (error) {
//       dispatch({ type: "LOGIN_FAILURE" });
//     }
//   };

//   const signInWithGoogle = () => {
//     dispatch({ type: "LOGIN_START" });

//     signInWithPopup(auth, provider)
//       .then((result) => {
//         console.log(result);
//         // The signed-in user info.
//         const user = result.user;
//         dispatch({ type: "LOGIN_SUCCESS", payload: user });
//         navigate("/");
//       })
//       .catch((error) => {
//         dispatch({ type: "LOGIN_FAILURE" });
//       });
//   };
  // console.log(inputs);

  const addData = () => {
  history("/home");}
  return (
    <div className="login">
      <form>
        <h2>Login</h2>
        <div className="formInput">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="formInput">
          <input
            type={inputType}
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <div className="eyeIcon" onClick={handleToggle}>
            {toggleEye ? <Visibility /> : <VisibilityOff />}
          </div>
        </div>
         <button type="submit" onClick={addData}> 
          Login
        </button>

        <div className="formLink">
          <span>Go to HomePage </span>
          <Link
            to="/"
            className="formSignup"
            style={{ textDecoration: "none" }}
          >
            {" "}
            SignUp
          </Link>
        </div>

        <div className="line"></div>
        <div className="media-options">
          <Link to="#" className="facebook" style={{ textDecoration: "none" }}>
            <FacebookRounded className="facebookIcon" />
            <span>Login with Facebook</span>
          </Link>
        </div>
        <div className="media-options">
          <Link
            to="#"
            className="facebook google"
            style={{ textDecoration: "none" }}
            // onClick={signInWithGoogle}
          >
            <img src={imagee} alt="" className="googleImg" />
            <span>Login with Google</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;