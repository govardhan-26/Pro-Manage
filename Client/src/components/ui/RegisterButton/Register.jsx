import "./Register.css";

const RegisterButton = ({ text = "xyz", bg, color, border, onclick }) => {
  const buttonStyle = {
    backgroundColor: bg,
    color: color,
    border: border,
  };
  return (
    <button style={buttonStyle} onClick={onclick} className="buttons">
      {text}
    </button>
  );
};

export { RegisterButton };
