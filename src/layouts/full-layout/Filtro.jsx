import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FilterBox, SearchButton } from './FiltroStyles';  // Importar el botón de búsqueda

function Filtro() {
  const [purchaseType, setPurchaseType] = React.useState('');
  const [propertyType, setPropertyType] = React.useState('');
  const [region, setRegion] = React.useState('');

  const handlePurchaseTypeChange = (event) => {
    setPurchaseType(event.target.value);
  };

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleSearchClick = () => {
    // Lógica para la búsqueda, por ejemplo, enviar los filtros a una API
    console.log('Buscar propiedades con:', {
      purchaseType,
      propertyType,
      region
    });
  };

  return (
    <FilterBox>
      <FormControl fullWidth>
        <InputLabel id="select-purchase-type-label">Comprar/Arrendar</InputLabel>
        <Select
          labelId="select-purchase-type-label"
          id="select-purchase-type"
          value={purchaseType}
          label="Comprar/Arrendar"
          onChange={handlePurchaseTypeChange}
        >
          <MenuItem value="comprar">Comprar</MenuItem>
          <MenuItem value="arrendar">Arrendar</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="select-property-type-label">Tipo de Propiedad</InputLabel>
        <Select
          labelId="select-property-type-label"
          id="select-property-type"
          value={propertyType}
          label="Tipo de Propiedad"
          onChange={handlePropertyTypeChange}
        >
          <MenuItem value="casa">Casa</MenuItem>
          <MenuItem value="departamento">Departamento</MenuItem>
          <MenuItem value="oficina">Oficina</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="select-region-label">Región</InputLabel>
        <Select
          labelId="select-region-label"
          id="select-region"
          value={region}
          label="Región"
          onChange={handleRegionChange}
        > 
          <MenuItem value="Arica y Parinacota">Arica y Parinacota</MenuItem>
          <MenuItem value="Tarapacá">Tarapacá</MenuItem>
          <MenuItem value="Antofagasta">Antofagasta</MenuItem>
          <MenuItem value="Atacama">Atacama</MenuItem>
          <MenuItem value="Coquimbo">Coquimbo</MenuItem>
          <MenuItem value="Valparaíso">Valparaíso</MenuItem>
          <MenuItem value="metropolitana">Metropolitana</MenuItem>
          <MenuItem value="O'Higgins">O'Higgins</MenuItem>
          <MenuItem value="Maule">Maule</MenuItem>
          <MenuItem value="Ñuble">Ñuble</MenuItem>
          <MenuItem value="Biobío">Biobío</MenuItem>
          <MenuItem value="La Araucanía">La Araucanía</MenuItem>
          <MenuItem value="Los Ríos">Los Ríos</MenuItem>
          <MenuItem value="Los Lagos">Los Lagos</MenuItem>
          <MenuItem value="Aysén">Aysén</MenuItem>
          <MenuItem value="Magallenes">Magallanes</MenuItem>
          {/* Agrega más regiones según sea necesario */}
        </Select>
      </FormControl>
      <SearchButton onClick={handleSearchClick}>
        Buscar
      </SearchButton>
    </FilterBox>
  );
}

export default Filtro;
