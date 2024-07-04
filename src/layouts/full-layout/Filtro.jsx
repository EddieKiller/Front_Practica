import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Filtro() {
  const [age, setAge] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [location, setLocation] = React.useState('');

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="select-age-label">Age</InputLabel>
        <Select
          labelId="select-age-label"
          id="select-age"
          value={age}
          label="Age"
          onChange={handleAgeChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="select-gender-label">Gender</InputLabel>
        <Select
          labelId="select-gender-label"
          id="select-gender"
          value={gender}
          label="Gender"
          onChange={handleGenderChange}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="select-location-label">Location</InputLabel>
        <Select
          labelId="select-location-label"
          id="select-location"
          value={location}
          label="Location"
          onChange={handleLocationChange}
        >
          <MenuItem value="ny">New York</MenuItem>
          <MenuItem value="sf">San Francisco</MenuItem>
          <MenuItem value="la">Los Angeles</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Filtro;