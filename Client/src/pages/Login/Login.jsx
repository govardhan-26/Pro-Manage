import { useState } from "react";
import {
  LoginInput,
  PasswordInput,
  RegisterButton,
  Welcome,
} from "../../components";
import "./Login.css";
const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  console.log(loginInput);
  return (
    <div className="dash-container">
      <Welcome />
      <div className="form-container">
        <h3>Login</h3>
        <div className="inputs-login">
          <LoginInput
            placeholder="email"
            name="email"
            value={loginInput.email}
            setValue={setLoginInput}
            type="text"
            icon="email"
          />
          <PasswordInput
            value={loginInput.password}
            name="password"
            setValue={setLoginInput}
            placeholder="password"
            type="password"
            icon="password"
          />
        </div>
        <div className="buttons-login">
          <RegisterButton
            text="login"
            color="#ffffff"
            border="none"
            bg="#17A2B8"
          />
          <p className="noLogin-text">Have no account yet?</p>
          <RegisterButton
            text="register"
            color="#17A2B8"
            border="1px solid #17A2B8"
            bg="#ffffff"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
