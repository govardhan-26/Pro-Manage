import "./Button.css";
const Button = ({
  text = "xyz",
  shadow = "",
  width = "300px",
  bg,
  color,
  border,
}) => {
  const buttonStyle = {
    width: width,
    backgroundColor: bg,
    color: color,
    border: border,
    boxShadow: shadow,
  };
  return (
    <button style={buttonStyle} className="button ">
      {text}
    </button>
  );
};

export { Button };
