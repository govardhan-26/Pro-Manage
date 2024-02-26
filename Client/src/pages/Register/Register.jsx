import { LoginInput, PasswordInput, RegisterButton, Welcome } from '../../components'
import './Register.css'
const Register = () => {
  return (
    <div className="dash-container">
      <Welcome />
      <div className="form-container">
        <h4>Register</h4>
        <div className="register-login">
          <LoginInput
            placeholder="person"
            type="name"
            icon="name"
          />
          <LoginInput
            placeholder="email"
            type="text"
            icon="email"
          />
          <PasswordInput
            placeholder="password"
            type="password"
            icon="password"
          />
          <PasswordInput
            placeholder="confirm password"
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

export default Register
