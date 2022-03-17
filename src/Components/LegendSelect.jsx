import React from 'react'
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from '@mui/material/FormControl';

export default function LegendSelect(props) {
  return (
    <div>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="Is legendary? selector">Legendary</InputLabel>
            <Select
              labelId="legendary"
              id="legendary"
              value={props.legendary}
              label="Legendary"
              onChange={(event) => props.setLegendary(event.target.value)}
              autoWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={false}>False</MenuItem>
              <MenuItem value={true}>True</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="Alignment selector">Alignment</InputLabel>
            <Select
              labelId="Alignment"
              id="Alignment"
              value={props.alignment}
              label="Aligment"
              onChange={(event) => props.setAlignment(event.target.value)}
              autoWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Any Alignment"}>Any Alignment</MenuItem>
              <MenuItem value={"Any Evil Alignment"}>Any Evil Alignment</MenuItem>
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
        
        </div>

  )
}
