import React from 'react'
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from '@mui/material/FormControl';

export default function AlignmentSelect(props) {
  return (
    <div>
        
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="Alignment selector">Alignment</InputLabel>
            <Select
              labelId="Alignment"
              id="Alignment"
              value={props.alignment}
              label="Aligment"
              onChange={(event) => props.setAligment(event.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"evil"}>evil</MenuItem>
              <MenuItem value={"neutral"}>neutral</MenuItem>
              <MenuItem value={"good"}>good</MenuItem>
            </Select>
            </FormControl>

        </div>

  )
}
