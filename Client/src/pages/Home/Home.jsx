import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { EditModal } from "../../components";
import { EditShareModal } from "../../components/Modal/EditShareModal/EditShareModal";
import './Home.css'

const Home = () => {
  return (
    <div
      style={{
        margin: "50px",


      }}
    >
<<<<<<< Updated upstream
      <EditShareModal />
      {/* <Calendar /> */}
=======
      <EditModal />
>>>>>>> Stashed changes
    </div>
  );
};

export default Home;
