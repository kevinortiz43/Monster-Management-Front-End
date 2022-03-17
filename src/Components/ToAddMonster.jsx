import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import AddTaskIcon from "@mui/icons-material/AddTask";
function ToAddMonster() {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      endIcon={<AddTaskIcon />}
      onClick={() => {
        navigate("/add-monster");
      }}
    >
      Add Monster
    </Button>
  );
}

export default ToAddMonster;
