import { RegisterButton } from "../../components";
import ModalComponent from "../../components/Modal/DeleteModal";
const Home = () => {
  return (
    <div
      className=""
      style={{
        margin: "40px",
      }}
    >
      <RegisterButton
        text="register"
        color="#ffffff"
        border="none"
        bg="#17A2B8"
      />
      <RegisterButton
        text="register"
        color="#17A2B8"
        border="1px solid #17A2B8"
        bg="#ffffff"
      />
    </div>
  );
};

export default Home;
