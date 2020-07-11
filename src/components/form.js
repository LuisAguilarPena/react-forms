import React from "react";
import { TextField, Radio, MenuItem, FormControl, FormLabel, RadioGroup, FormControlLabel } from '@material-ui/core';

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      country: "",
      countries: [],
      gender: "female"
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

  handleChange = event => this.setState({country: event.target.value})
  handleChangeGender = event => this.setState({gender: event.target.value})

  
  render() {
    const { countries, country, gender } = this.state;
    console.log("DATA -->", countries);
      return (
        <form noValidate autoComplete="off" style={{display: 'flex', flexDirection: 'column'}}>
          <TextField label="Name" />
          <TextField label="Last Name" />
          <TextField label="E-mail" />
          
          <TextField label="Country" 
            value={country}
            select
            onChange={this.handleChange}
          >
            {countries.map( country => {
              // There is a way to properly display the info, I've done it before due to time constraints will leave this here, see https://www.8x8.com/careers
              return <MenuItem key={country.name} value={country.name} >
                Country: {country.name} Region: {country.region} Currency: {country.currencies[0].code}
              </MenuItem>
            } 
            )}
          </TextField> <br/>
    
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={this.handleChangeGender}>
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