import "./Register.css";

const RegisterButton = ({ text = "xyz", bg, color, border }) => {
  const buttonStyle = {
    backgroundColor: bg,
    color: color,
    border: border,
  };
  return (
    <button style={buttonStyle} className="buttons">
      {text}
    </button>
  );
};

export { RegisterButton };
