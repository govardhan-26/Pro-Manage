import email from '../../../assets/emial.svg'
import person from '../../../assets/person.svg'
import './LoginInput.css'
const LoginInput = ({ placeholder, icon, type }) => {
  let ic
  ic = icon === 'email' ? email : person
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
    </div>
  )
}
export { LoginInput }
