import email from '../../../assets/emial.svg'
import eye from '../../../assets/eye.svg'
import password from '../../../assets/password.svg'
import person from '../../../assets/person.svg'
import './LoginInput.css'
const LoginInput = ({ placeholder, icon, type }) => {
  let ic
  ic =
    icon === 'email'
      ? email
      : icon === 'password'
      ? password
      : icon === 'name'
      ? person
      : eye
  return (
    <div className="login-input">
      <img
        src={ic}
        className="icon"
      />
      <input
        type={type}
        placeholder={placeholder}
      />
      {type === 'password' && (
        <img
          src={eye}
          className="icon-2 icon"
          alt="Eye icon"
        />
      )}
    </div>
  )
}
export { LoginInput }
