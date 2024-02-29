import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { EditModal } from "../../components";
const Home = () => {
  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <EditModal />
      {/* <Calendar /> */}
    </div>
  );
};

export default Home;
