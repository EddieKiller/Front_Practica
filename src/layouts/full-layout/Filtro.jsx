import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FilterBox } from './FiltroStyles';

function Filtro() {
  const [age, setAge] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [power, setPower] = React.useState('');
  const [affiliation, setAffiliation] = React.useState('');

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handlePowerChange = (event) => {
    setPower(event.target.value);
  };

  const handleAffiliationChange = (event) => {
    setAffiliation(event.target.value);
  };

  return (
    <FilterBox>
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
      <FormControl fullWidth>
        <InputLabel id="select-power-label">Power</InputLabel>
        <Select
          labelId="select-power-label"
          id="select-power"
          value={power}
          label="Power"
          onChange={handlePowerChange}
        >
          <MenuItem value="strength">Strength</MenuItem>
          <MenuItem value="speed">Speed</MenuItem>
          <MenuItem value="flight">Flight</MenuItem>
          <MenuItem value="telepathy">Telepathy</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="select-affiliation-label">Affiliation</InputLabel>
        <Select
          labelId="select-affiliation-label"
          id="select-affiliation"
          value={affiliation}
          label="Affiliation"
          onChange={handleAffiliationChange}
        >
          <MenuItem value="hero">Hero</MenuItem>
          <MenuItem value="villain">Villain</MenuItem>
          <MenuItem value="neutral">Neutral</MenuItem>
        </Select>
      </FormControl>
    </FilterBox>
  );
}

export default Filtro;
