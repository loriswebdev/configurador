import React from "react";

import CustomCarousel from "./CustomCarousel";
import { useModel, useModelUpdate } from "./hooks/ModelProvider";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import imgUrls from "../data/carouselUrls.json";
import { visuallyHidden } from "@mui/utils";

export default function Color({children}) {
 
  const setModel = useModelUpdate();
  const model = useModel();

  function defaultValue(model) {
    switch (model.color) {
      case "red":
        return "rojo";
      case "white":
        return "blanco";
      case "grey":
        return "plata";
      case "blue":
        return "azul";
      default:
        return false;
    }
  }
  function onRadioButtonChange(e){
    switch (e.target.value) {
      case "rojo":
         setModel({color: 'red'});
         break
      case "blanco":
         setModel({color: 'white'});
         break
      case "plata":
         setModel({color: 'grey'});
         break
      case "azul":
         setModel({color: 'blue'});
         break
      
      default:
        return false;
    }
  }
  const indexFunc = (e) =>
    e.color === model.color &&
    e.model === model.model &&
    e.nextGen === model.nextGen;
  const onColorClick = (e, color) => {
    console.dir(e.target)
    setModel({ color: color });
  };

  return (
    <>
   
   
      <Stack direction="row"sx={{ paddingLeft: 0, marginBottom: "30px"}}>
     
      <Stack>
        {children}
        <h3 style={{ paddingTop: "20px", width: 'fit-content' }}>Elige e3 color de tu unidad</h3>
        <Stack direction="row">
        <div className="color-select-container">
          <div className={model.color === 'red' ? "color-select-ring active": "color-select-ring"}></div>
          <div className='color-select-inner-ring'></div>
          <img className="color-select-circle"
            onTouchEnd={(e) => {
              onColorClick(e, "red");
            }}
            onClick={(e) => {
              onColorClick(e, "red");
            }}
            src="https://kwjalisco.com/wp-content/uploads/2022/09/rojo.png"
            alt=""
            width="95"
            height="95"
          />
          <img
      
            className="color-select"
            src="https://kwjalisco.com/wp-content/uploads/2022/09/rojo.png"
            alt=""
            width="95"
            height="95"
          />
        </div>
        <div className="color-select-container">
          <div className={model.color === 'white' ? "color-select-ring active": "color-select-ring"}></div>
           <div className='color-select-inner-ring'></div>
          <img className="color-select-circle"
            onTouchEnd={(e) => {
              onColorClick(e, "white");
            }}
            onClick={(e) => {
              onColorClick(e, "white");
            }}
            src="https://kwjalisco.com/wp-content/uploads/2022/09/blanco.png"
            alt=""
            width="95"
            height="95"
          />
          <img

            className="color-select"
            src="https://kwjalisco.com/wp-content/uploads/2022/09/blanco.png"
            alt=""
            width="95"
            height="95"
          />
        </div>
        <div className="color-select-container">
          <div className={model.color === 'grey' ? "color-select-ring active": "color-select-ring"}></div>
           <div className='color-select-inner-ring'></div>
          <img className="color-select-circle"
            onTouchEnd={(e) => {
              onColorClick(e, "grey");
            }}
            onClick={(e) => {
              onColorClick(e, "grey");
            }}
            src="https://kwjalisco.com/wp-content/uploads/2022/09/plata.png"
            alt=""
            width="95"
            height="95"
          />
          <img
       
            className="color-select"
            src="https://kwjalisco.com/wp-content/uploads/2022/09/plata.png"
            alt=""
            width="95"
            height="95"
          />
        </div>
        <div className="color-select-container">
          <div className={model.color === 'blue' ? "color-select-ring active": "color-select-ring"}></div>
           <div className='color-select-inner-ring'></div>
          <img className="color-select-circle"
            onTouchEnd={(e) => {
              onColorClick(e, "blue");
            }}
            onClick={(e) => {
              onColorClick(e, "blue");
            }}
            src="https://kwjalisco.com/wp-content/uploads/2022/09/azul.png"
            alt=""
            width="95"
            height="95"
          />
          <img
            
            className="color-select"
            src="https://kwjalisco.com/wp-content/uploads/2022/09/azul.png"
            alt=""
            width="95"
            height="95"
          />
        </div>
        </Stack>
        </Stack>
        <CustomCarousel
          width="600px"
          state={model}
          indexFunc={indexFunc}
          imgUrls={imgUrls}
        />
      </Stack>
            
      <FormControl>
        <FormLabel 
        sx={visuallyHidden}
         id="demo-radio-buttons-group-label">
          Color Selección
        </FormLabel>
        <RadioGroup
          sx={visuallyHidden}
          aria-labelledby="demo-radio-buttons-group-label"
         value={defaultValue(model)}
         onChange={onRadioButtonChange}
          name="radio-buttons-group"
        >
          <FormControlLabel
            labelPlacement="start"
            control={
              <Radio
                className="visually-hidden configurador-form"
                inputProps={{ title: "color-de-unidad" }}
                name="color-de-unidad"
                value="rojo"
              />
            }
            label=""
          />
          <FormControlLabel
            labelPlacement="start"
            control={
              <Radio
                className="visually-hidden configurador-form"
                inputProps={{ title: "color-de-unidad," }}
                name="color-de-unidad"
                value="blanco"
              />
            }
            label=""
          />
          <FormControlLabel
            labelPlacement="start"
            control={
              <Radio
                className="visually-hidden configurador-form"
                inputProps={{ title: "color-de-unidad" }}
                name="color-de-unidad"
                value="plata"
              />
            }
            label=""
          />
          <FormControlLabel
            labelPlacement="start"
            control={
              <Radio
                className="visually-hidden configurador-form"
                inputProps={{ title: "color-de-unidad" }}
                name="color-de-unidad"
                value="azul"
              />
            }
            label=""
          />
        </RadioGroup>
     
      </FormControl>
    </>
  );
}
