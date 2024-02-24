import "./Button.css";
const PrimaryButton = ({ text = "xyz", width = "300px" }) => {
  const buttonStyle = {
    width: width,
  };
  return (
    <button style={buttonStyle} className="button button-primary">
      {text}
    </button>
  );
};

const DangerButton = ({ text = "del", width = "300px" }) => {
  const buttonStyle = {
    width: width,
  };
  return (
    <button style={buttonStyle} className=" button button-danger">
      {text}
    </button>
  );
};
export { PrimaryButton, DangerButton };
