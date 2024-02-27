import "./Button.css";
const Button = ({
  children="",
  shadow = "",
  width = "300px",
  bg,
  color,
  border,
  onclick,
}) => {
  const buttonStyle = {
    width: width,
    backgroundColor: bg,
    color: color,
    border: border,
    boxShadow: shadow,
  };
  return (
    <button 
    onClick={onclick}
    style={buttonStyle} className="button ">
      {children}
    </button>
  );
};

export { Button };
