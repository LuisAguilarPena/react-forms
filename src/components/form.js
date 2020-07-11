import React from "react";
import { TextField, Radio, MenuItem, FormControl, FormLabel, RadioGroup, FormControlLabel } from '@material-ui/core';

export default function Form() {
  return (
    <form noValidate autoComplete="off" style={{display: 'flex', flexDirection: 'column'}}>
      <TextField id="outlined-basic" label="Name" />
      <TextField id="outlined-basic" label="Last Name" />
      <TextField id="outlined-basic" label="E-mail" />
      
      <TextField id="outlined-basic" label="Country" 
        value=""
        select 
      >
        <MenuItem value="USA">USA</MenuItem>
      </TextField> <br/>

      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value="" >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>


      <TextField id="outlined-basic" label="Teléfono" />

    </form>
  )
}