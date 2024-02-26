import { useState } from "react";
import {
  LoginInput,
  PasswordInput,
  RegisterButton,
  Welcome,
} from "../../components";
import "./Register.css";
const Register = () => {
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    password: "",
    cnfpwd: "",
  });
  return (
    <div className="dash-container">
      <Welcome />
      <div className="form-container">
        <h4>Register</h4>
        <div className="register-login">
          <LoginInput
            name="name"
            value={inputVal.name}
            setValue={setInputVal}
            placeholder="person"
            type="name"
            icon="name"
          />
          <LoginInput
            name="email"
            value={inputVal.email}
            setValue={setInputVal}
            placeholder="email"
            type="text"
            icon="email"
          />
          <PasswordInput
            placeholder="password"
            type="password"
            icon="password"
            name="password"
            value={inputVal.password}
            setValue={setInputVal}
          />
          <PasswordInput
            placeholder="confirm password"
            type="password"
            icon="password"
            value={inputVal.cnfpwd}
            setValue={setInputVal}
            name="cnfpwd"
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

export default Register;
