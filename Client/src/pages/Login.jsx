import "./Login.css";
import signin from "../assets/signin.svg";
import { Eye, Mail, LockKeyhole } from "lucide-react";
import { useState } from "react";
const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  return (
    <div className="dash-container">
      <div className="welcome">
        <div className="welcome-content">
          <div className="pic-bg"></div>
          <div className="welcome-pic">
            <img src={signin} className="wel-pic" alt="pic" />
          </div>
          <div className="welcome-text">
            <h1>Welcome abroad my friend</h1>
            <p>just a couple of clicks and we start</p>
          </div>
        </div>
      </div>
      <div className="signin-container">
        <form action="" className="signin-form">
          <div className="login-label">
            <label htmlFor="Login">Login</label>
          </div>
          <div className="login-inputs">
            <div className="login-input">
              <Mail className="icon"/>
              <input type="text" placeholder="Email" />
            </div >
            <div className="login-input">
              <LockKeyhole className="icon" />
              <input type="password" placeholder="Password"/>
            </div>
          </div>
          <div className="buttons">
            <button className="login-button">Log in</button>
            <p>Have no account yet ?</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
