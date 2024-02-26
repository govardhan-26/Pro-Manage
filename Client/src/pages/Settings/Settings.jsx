import { useState } from "react";
import { LoginInput, RegisterButton, PasswordInput } from "../../components";
import "./Settings.css";
const SettingsPage = () => {
  const [inputVal, setInputVal] = useState({
    name: "",
    Oldpassword: "",
    newPassword: "",
  });
  return (
    <div className="set-container headd">
      <h3>Settings</h3>
      <div className="set-inputContainer">
        <LoginInput
          name="name"
          value={inputVal.name}
          setValue={setInputVal}
          placeholder="name"
          type="text"
          icon="name"
        />
        <PasswordInput
          name="Oldpassword"
          value={inputVal.Oldpassword}
          setValue={setInputVal}
          placeholder="Old password"
          type="password"
          icon="password"
        />
        <PasswordInput
          name="newPassword"
          value={inputVal.newPassword}
          setValue={setInputVal}
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
  );
};

export default SettingsPage;
