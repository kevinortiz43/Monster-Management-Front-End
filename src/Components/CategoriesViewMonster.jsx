import React, { useState } from "react";
import { SiDungeonsanddragons } from "react-icons/si";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import MonsterService from "../services/MonsterService";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import ReactCardFlip from "react-card-flip";
import { GiUpCard } from "react-icons/gi";
import CrudButtons from "./CrudButtons";

function CategoriesViewMonster(props) {
  const navigate = useNavigate();

  const deleteMonster = (id) => {
    navigate(`/delete-monster/${id}`);
    MonsterService.deleteMonster(id).then((response) => {});
  };

  const [updating, setUpdating] = useState(false);
  const [monster, setMonster] = useState(props.monster);

  const onChange = (event) => {
    setMonster({ ...monster, [event.target.name]: event.target.value });
  };

  const onSave = (event) => {
    // event.preventDefault();
    MonsterService.updateMonster(monster.id, monster);
  };

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="cards" key={props.monster.id}>
        <button className="crudButtons" onClick={handleFlip}>
          {" "}
          <GiUpCard />
        </button>
        <div>
          {updating ? (
            <TextField
              name="creature"
              id="standard-basic"
              label="Creature Name"
              variant="standard"
              fullWidth
              value={monster.creature}
              onChange={onChange}
            />
          ) : (
            <h3 className="descriptions">{monster.creature} </h3>
          )}

          {updating ? (
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="Alignment selector">Alignment</InputLabel>
              <Select
                name="alignment"
                labelId="Alignment"
                id="Alignment"
                value={monster.alignment}
                label="Aligment"
                onChange={onChange}
                autoWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Any Alignment"}>Any Alignment</MenuItem>
                <MenuItem value={"Any Evil Alignment"}>
                  Any Evil Alignment
                </MenuItem>
                <MenuItem value={"Chaotic"}>Chaotic</MenuItem>
                <MenuItem value={"Chaotic Evil"}>Chaotic Evil</MenuItem>
                <MenuItem value={"Chaotic Good"}>Chaotic Good</MenuItem>
                <MenuItem value={"Chaotic Neutral"}>Chaotic Neutral</MenuItem>
                <MenuItem value={"Lawful"}>Lawful</MenuItem>
                <MenuItem value={"Lawful Evil"}>Lawful Evil</MenuItem>
                <MenuItem value={"Lawful Good"}>Lawful Good</MenuItem>
                <MenuItem value={"Lawful Neutral"}>Lawful Neutral</MenuItem>
                <MenuItem value={"Lawfuly Evil"}>Lawfuly Evil</MenuItem>
                <MenuItem value={"Neutral"}>Neutral</MenuItem>
                <MenuItem value={"Neutral Evil"}>Neutral Evil</MenuItem>
                <MenuItem value={"Neutral Good"}>Neutral Good</MenuItem>
                <MenuItem value={"Unaligned"}>Unaligned</MenuItem>
              </Select>
            </FormControl>
          ) : (
            <p className="descriptions"> {monster.alignment} </p>
          )}
          {updating ? (
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="Alignment selector">Legendary</InputLabel>
              <Select
                name="legendary"
                labelId="legendary"
                id="legendary"
                value={monster.legendary}
                label="Legendary"
                onChange={onChange}
                autoWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                <MenuItem value={false}>False</MenuItem>
                <MenuItem value={true}>True</MenuItem>
              </Select>
            </FormControl>
          ) : monster.is_legendary === true ? (
            <SiDungeonsanddragons />
          ) : null}

          <div
          //  className="card-monster-image"
           >
            <img
              className="card-monster-picture"
              alt="monsterImage"
              src={monster.portrait}
            />

            {updating ? (
              <TextField
                name="classification"
                id="standard-basic"
                label="Type"
                variant="standard"
                fullWidth
                value={monster.classification}
                onChange={onChange}
              />
            ) : (
              <p className="descriptions">Type: {monster.classification}</p>
            )}

            {updating ? (
              <TextField
                name="size"
                id="standard-basic"
                label="Size"
                variant="standard"
                fullWidth
                value={monster.size}
                onChange={onChange}
              />
            ) : (
              <p className="descriptions">Size: {monster.size}</p>
            )}
          </div>
        </div>
        <CrudButtons
          updating={updating}
          setUpdating={setUpdating}
          deleteMonster={deleteMonster}
          monster={monster}
          onSave={onSave}
        />
      </div>
      <div className="cards">
        <button className="crudButtons" onClick={handleFlip}>
          {" "}
          <GiUpCard />
          <img
            className="card-monster-picture"
            alt="monsterImage"
            src={monster.portrait}
          />
        </button>
        <h2 className="descriptions">
          {updating ? (
            <TextField
              name="challenge"
              id="standard-basic"
              label="Challenge Rating"
              variant="standard"
              type="number"
              fullWidth
              value={monster.challenge}
              onChange={onChange}
            />
          ) : (
            <p className="descriptions">Challenge: {monster.challenge} CR</p>
          )}

          {updating ? (
            <TextField
              name="armor"
              id="standard-basic"
              label="Armor Class"
              variant="standard"
              type="number"
              fullWidth
              value={monster.armor}
              onChange={onChange}
            />
          ) : (
            <p className="descriptions">Armor Class: {monster.armor} AC</p>
          )}

          {updating ? (
            <TextField
              name="health"
              id="standard-basic"
              label="Health"
              variant="standard"
              type="number"
              fullWidth
              value={monster.health}
              onChange={onChange}
            />
          ) : (
            <p className="descriptions">Health: {monster.health} HP</p>
          )}

          <div>
            <CrudButtons
              updating={updating}
              setUpdating={setUpdating}
              deleteMonster={deleteMonster}
              monster={monster}
              onSave={onSave}
            />
          </div>
        </h2>
      </div>
    </ReactCardFlip>
  );
}

export default CategoriesViewMonster;
