import { LoginInput,RegisterButton, PasswordInput } from '../../components'
import './Settings.css'
const SettingsPage = () => {
  return (
    <div className="set-container headd">
      <h3>Settings</h3>
      <div className="set-inputContainer">
        <LoginInput
          placeholder="name"
          type="text"
          icon="name"
        />
        <PasswordInput
          placeholder="Old password"
          type="password"
          icon="password"
        />
        <PasswordInput
          placeholder="New password"
          type="password"
          icon="password"
        />
      </div>
 <RegisterButton
            text="Update"
            color="#ffffff"
            border="none"
            bg="#17A2B8"
          />
    </div>
  )
}

export default SettingsPage
