import React, { useState } from "react";

import imgUrls from '../data/carouselUrls.json';
import { Container, Stack } from "@mui/material";

import "../assets/scss/main.scss";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import { NavLink } from "react-router-dom";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Color from "../components/Color";
import Security from "../components/Security";
import Interior from "../components/Interior";
const photos1 = [
  { src: "https://kwjalisco.com/wp-content/uploads/2022/09/DSC_0353.jpg", width: 800, height: 600 },
  { src: "https://kwjalisco.com/wp-content/uploads/2022/09/081230_T660__Dash_2.jpg", width: 1600, height: 900 },
  { src: "https://kwjalisco.com/wp-content/uploads/2022/09/081215_T800__DRDoor.jpg", width: 1600, height: 900 },
  { src: "https://kwjalisco.com/wp-content/uploads/2022/09/081203_T660__SleeperDVR_2-low.jpg", width: 1600, height: 900 },
  { src: "https://kwjalisco.com/wp-content/uploads/2022/09/081202_T660__SleeperPASS_3-low.jpg", width: 800, height: 600 },
  
];
const photos2=[{ src: "https://kwjalisco.com/wp-content/uploads/2022/09/DSC_0344.jpg", width: 1000, height: 900 },
{ src: "https://kwjalisco.com/wp-content/uploads/2022/09/KW070110L-38AeroCab-low.jpg", width: 1000, height: 900 },
{ src: "https://kwjalisco.com/wp-content/uploads/2022/09/KW040907C-72Splendor.jpg", width: 1000, height: 900 },
{ src: "https://kwjalisco.com/wp-content/uploads/2022/09/KW040907A-38Aero.jpg", width: 1000, height: 900 },]
const allphotos = [...photos1, ...photos2]
export default function Page3() {
    const [index, setIndex] = useState(-1);
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
        <Stack  sx={{marginTop:'20px'}} minWidth="100%" direction="row" justifyContent="space-between">
          <h2 style={{margin:0}}className='page-header'>Interior</h2>
          <NavLink style={{ justifySelf: "flex-end" }} to="/page2">
            <ColorButton size="small">Regresar</ColorButton>
          </NavLink>
        </Stack>
       <Interior/>

        <PhotoAlbum photos={photos1} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

<Lightbox
  slides={allphotos}
  open={index >= 0}
  index={index}
  close={() => setIndex(-1)}
  // enable optional lightbox plugins
  plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
/>
<Stack sx={{mt: '15px'}} alignItems='center'><Stack width={'80%'}><PhotoAlbum photos={photos2} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex(index + photos1.length)} /></Stack></Stack>

<Color imgUrls={imgUrls}>
  <Security/>
</Color>
        <Stack sx={{marginBottom: '20px'}}minWidth="100%" direction="row" justifyContent="flex-end">
          <NavLink to='/Page4'><ColorButton size="sm">Guardar y Continuar</ColorButton></NavLink>
        </Stack>
      </Container>
    </>
  );    
}
