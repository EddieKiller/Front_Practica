import styled from '@emotion/styled';

export const FilterBox = styled.div`
  display: flex;
  gap: 16px;
  margin: 16px;
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

export const SearchButton = styled.button`
  width: 100%;  /* Ocupa el ancho completo del contenedor */
  padding: 12px;
  background-color: #007bff;  /* Color de fondo del botón */
  color: white;  /* Color del texto del botón */
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;  /* Color de fondo del botón al pasar el ratón */
  }
`;
