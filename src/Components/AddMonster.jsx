import React, { useState } from "react";
import { Container } from "@material-ui/core";

import MonsterService from "../services/MonsterService";
import LegendSelect from "./LegendSelect";
import Paper from "@material-ui/core/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import AddMonsterContainer from "./AddMonsterContainer";

export default function AddMonster() {
  const [creature, setCreature] = useState("");
  const [challenge, setChallenge] = useState("");
  const [armor, setArmor] = useState("");
  const [alignment, setAlignment] = useState("");
  const [health, setHealth] = useState("");
  const [size, setSize] = useState("");
  const [classification, setClassification] = useState("");
  const [legendary, setLegendary] = useState("");
  const [portrait, setPortrait] = useState(
    "https://pbs.twimg.com/profile_images/1082330444845277187/eRmykg4g_400x400.jpg"
  );
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const addingMonster = {
      creature,
      challenge,
      armor,
      alignment,
      health,
      size,
      classification,
      legendary,
      portrait,
    };
    console.log(addingMonster);
    MonsterService.createMonster(addingMonster)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const paperStyle = { padding: "20px 40px", width: 400, margin: "30px auto" };

  return (
    <div>
      <Container>
        <Paper elevation={3} style={paperStyle}>
          <h3 className="text-center">Add Monster</h3>
          <AddMonsterContainer
            creature={creature}
            setCreature={setCreature}
            armor={armor}
            setArmor={setArmor}
            challenge={challenge}
            setChallenge={setChallenge}
            health={health}
            setHealth={setHealth}
            size={size}
            setSize={setSize}
            classification={classification}
            setClassification={setClassification}
            portrait={portrait}
            setPortrait= {setPortrait}
          />
          <LegendSelect
            legendary={legendary}
            setLegendary={setLegendary}
            alignment={alignment}
            setAlignment={setAlignment}
          />
          <Stack justifyContent="center" direction="row" spacing={2}>
            <Button variant="contained" color="success" onClick={handleSubmit}>
              Submit
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
          </Stack>
        </Paper>
      </Container>
    </div>
  );
}
