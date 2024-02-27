import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import {
  LoginInput,
  PasswordInput,
  RegisterButton,
  Welcome,
} from '../../components'
import { useLoginMutation } from '../../store/api/api'
import { setCredentials } from '../../store/slices/authSlice'
import './Login.css'
const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [login, { isLoading }] = useLoginMutation()
  const submitHandler = async () => {
    try {
      const response = await login({
        email: loginInput.email,
        password: loginInput.password,
      })

      if (response.error) {
        return toast.error(`${response.error.data.message}`)
      }
      dispatch(setCredentials(response.data))
      toast.success('Logged in successfully')
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
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
            onclick={submitHandler}
            text="login"
            color="#ffffff"
            border="none"
            bg="#17A2B8"
          />
          <p className="noLogin-text">Have no account yet?</p>
          <Link
            style={{ textDecoration: 'none' }}
            to={'/register'}
          >
            <RegisterButton
              text="register"
              color="#17A2B8"
              border="1px solid #17A2B8"
              bg="#ffffff"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
