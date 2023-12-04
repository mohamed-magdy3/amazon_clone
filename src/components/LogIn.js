import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const navigate = useNavigate();

  // SIGN IN FUNCTION
  // const signIn = (e) => {
  //   e.preventDefault();
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((auth) => {
  //       if (auth) {
  //         navigate("/");
  //       }
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //     });
  // };
  

  // REGISTERATION FUNCTION
  // const register = (e) => {
  //   e.preventDefault();
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((auth) => {
  //       if (auth) {
  //         navigate("/");
  //       }
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //     });
  // };
  //
  document.body.style.backgroundColor = "aliceblue";
  return (
    <div className="login">
      <div className="login-logo-Div">
        <Link to="/">
          <img src={require("../images/login-logo.png")} className="login-logo" />
        </Link>
      </div>

      <div className="login-container">
        <h1>Sign in</h1>
        <form className="data-form">
          <h5>Email</h5>
          <input
            type="text"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            defaultValue={password}
            onChange={(e) => setPasword(e.target.value)}
          />
          <button
            type="submit"
            className="login-signIn-btn"
          
          >
            Sign in
          </button>
          <p>
            By signing in, you agree to Amazon's fake of clone Use and Privacy
            Notice.
          </p>
          <button className="login-regist-btn">
            Create an account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
