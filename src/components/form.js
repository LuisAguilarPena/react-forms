import React from "react";
import { TextField, Radio, MenuItem, FormControl, FormLabel, RadioGroup, FormControlLabel } from '@material-ui/core';

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [
        {name: "Test"}
      ]
    }
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
        this.setState({countries: data});
      })
      .catch(err => {
          console.error('An error ocurred', err);
      });
  }


  
  render() {
    const { countries } = this.state;
    console.log("DATA -->", countries);
      return (
        <form noValidate autoComplete="off" style={{display: 'flex', flexDirection: 'column'}}>
          <TextField label="Name" />
          <TextField label="Last Name" />
          <TextField label="E-mail" />
          
          <TextField label="Country" 
            value=""
            select 
          >
            {countries.map( country => 
              <MenuItem key={country.name} value={country.name} >
                {country.name}
              </MenuItem>
            )}
          </TextField> <br/>
    
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value="" >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
    
    
          <TextField label="Teléfono" />
    
        </form>
      )
    }
}