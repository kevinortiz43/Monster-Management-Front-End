import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
function AddMonsterContainer(props) {
  return (
    <div>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "40ch" } }}
        noValidate
        autoComplete="no"
      >
        <TextField
          id="standard-basic"
          label="Creature Name"
          variant="standard"
          fullWidth
          value={props.creature}
          onChange={(event) => props.setCreature(event.target.value)}
        />

        <TextField
          id="standard-basic"
          label="Portrait"
          variant="standard"
          type="text"
          fullWidth
          value={props.portrait}
          onChange={(event) => props.setPortrait(event.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Armor Class"
          variant="standard"
          type="number"
          fullWidth
          value={props.armor}
          onChange={(event) => props.setArmor(event.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Challenge Rating"
          variant="standard"
          type="number"
          fullWidth
          value={props.challenge}
          onChange={(event) => props.setChallenge(event.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Health"
          variant="standard"
          type="number"
          fullWidth
          value={props.health}
          onChange={(event) => props.setHealth(event.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Size"
          variant="standard"
          fullWidth
          value={props.size}
          onChange={(event) => props.setSize(event.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Type"
          variant="standard"
          fullWidth
          value={props.classification}
          onChange={(event) => props.setClassification(event.target.value)}
        />
      </Box>
    </div>
  );
}

export default AddMonsterContainer;
