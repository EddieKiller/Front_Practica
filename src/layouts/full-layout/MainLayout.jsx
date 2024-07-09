import { Backdrop, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Filtro from "./Filtro";

function MainLayout() {
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      isLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <Header />
          <Filtro/>
          <Outlet />
        </>
      ) : (
        <Backdrop
          sx={{ 
            color: "#000",  // Color del CircularProgress
            backgroundColor: "#fff",  // Fondo blanco
            zIndex: 1300  // Valor de zIndex alto sin usar el theme
          }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
}

export default MainLayout;
