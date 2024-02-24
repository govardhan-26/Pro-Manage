import { DangerButton, PrimaryButton } from "../../components/index.js";
const Home = () => {
  return (
    <div
      className=""
      style={{
        margin: "40px",
      }}
    >
      <PrimaryButton text="hello" />
      <DangerButton text="clear" />
    </div>
  );
};

export default Home;
