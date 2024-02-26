import eye from '../../../assets/eye.svg'
import password from '../../../assets/password.svg'
import './PasswordInput.css'
const PasswordInput = ({placeholder}) => {
  return (
    <div className="login-input">
      <img
        src={password}
        className="icon"
      />
      <input
        type="password"
        placeholder={placeholder}
      />
      <img
        src={eye}
        className="icon-2 icon"
        alt="Eye icon"
      />
    </div>
  )
}

export{
    PasswordInput
}