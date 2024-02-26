import { useState } from 'react'
import signin from '../../assets/signin.svg'
import { LoginInput, RegisterButton } from '../../components'
import './Login.css'
const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  })
  return (
    <div className="dash-container">
      <div className="welcome">
        <div className="welcome-content">
          <div className="pic-bg"></div>
          <div className="welcome-pic">
            <img
              src={signin}
              className="wel-pic"
              alt="pic"
            />
          </div>
          <div className="welcome-text">
            <h1>Welcome abroad my friend</h1>
            <p>just a couple of clicks and we start</p>
          </div>
        </div>
      </div>
      <div className="form-container">
        <h3>Login</h3>
        <div className="inputs-login">
          <LoginInput
            placeholder="email"
            type="text"
            icon="email"
          />
          <br />
          <LoginInput
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
  )
}

export default Login
