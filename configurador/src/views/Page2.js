

import { Container, Stack } from "@mui/material";

import "../assets/scss/main.scss";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import { NavLink } from "react-router-dom";


import Exterior from "../components/Exterior";

export default function Page2() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    textTransform: "capitalize",
    fontFamily: "inherit",
    fontSize: "1.5rem",
    borderRadius: 0,
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700],
    },
  }));
  


  return (
    <>
      <Container>
        <Stack minWidth="100%" direction="row" justifyContent="space-between">
          <h2 className='page-header'>Exterior</h2>
          <NavLink style={{ justifySelf: "flex-end" }} to="/">
            <ColorButton size="small">Regresar</ColorButton>
          </NavLink>
        </Stack>
        <Exterior/>
        <Stack sx={{marginBottom: '20px'}}minWidth="100%" direction="row" justifyContent="flex-end">
          <NavLink to='/page3'><ColorButton size="sm">Guardar y Continuar</ColorButton></NavLink>
        </Stack>
      </Container>
    </>
  );
}
