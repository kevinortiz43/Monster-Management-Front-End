import React from "react";
import {
  TiArrowUpThick,
  TiArrowLeftThick,
  TiArrowRightThick,
  TiArrowDownThick,
  TiHomeOutline,
} from "react-icons/ti";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { ImTable } from "react-icons/im";
import { useNavigate } from "react-router-dom";

export default function NavigateButtons() {
  const navigate = useNavigate();

  function windowUp() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollToBottom() {
    window.scrollTo({ top: document.documentElement.scrollHeight });
  }

  return (
    <div className="NavigateButtons">

      
      <button className="scrollToBottom" onClick={scrollToBottom}>
        <TiArrowDownThick />
      </button>

      <button
        className="navigationButtonsLeft"
        onClick={() => {
          navigate(-1);
        }}
      >
        <TiArrowLeftThick />{" "}
      </button>
      <button
        className="navigationButtonsRight"
        onClick={() => {
          navigate(+1);
        }}
      >
        <TiArrowRightThick />{" "}
      </button>
      <button className="navigationButtonsHome" onClick={() => navigate("/")}>
        <TiHomeOutline />
      </button>
      <button
        className="navigationButtonsCards"
        onClick={() => {
          navigate("/view-monster/:id");
        }}
      >
        {" "}
        <ImTable />{" "}
      </button>
      <button className="windowUp" onClick={windowUp}>
        {" "}
        <TiArrowUpThick />{" "}
      </button>
      <button className="addMonster" onClick={() => navigate("/add-monster")}>
        <AddSharpIcon />{" "}
      </button>
    </div>
  );
}
