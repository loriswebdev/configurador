import React from 'react'
import esteroBocinas from "../data/EstereoBocinas.json";
import aireAcondicionado from "../data/AireAcondicionado.json";
import controlesAlVolante from "../data/ControlesAlVolante.json";
import volanteDePosiciones from "../data/VolanteDePosiciones.json";
import segurosElectricos from "../data/SegurosElectricos.json";
import consolaConPortavasos from "../data/ConsolaConPortavasos.json";
import pantallaNavPlus from "../data/PantallaNavPlus.json";
import interiorColor from '../data/InteriorColor.json';
import capacidad from '../data/Capacidad.json';
import asientosYAcabados from '../data/AsientosYAcabados.json'
import {Grid, Stack } from "@mui/material";
import useCreateRadioButtons from "../components/hooks/useCreateRadioButtons";
import { useBreakpoints } from "../components/hooks/useBreakpoints";
import useCreateAccordions from './hooks/useCreateAccordions';
export default function Interior() {
    const EstereoBocinas = useCreateRadioButtons(esteroBocinas, 'interior', 'start', 'interior', 'esteroBocinas');
  const AireAcondicionado = useCreateRadioButtons(aireAcondicionado, 'interior', 'start', 'interior', 'aireAcondicionado');
  const ControlesAlVolante = useCreateRadioButtons(controlesAlVolante, 'interior', 'start', 'interior', 'controlesAlVolante');
  const VolanteDePosiciones = useCreateRadioButtons(volanteDePosiciones, 'interior', 'start', 'interior', 'volanteDePosiciones');
  const SegurosElectricos = useCreateRadioButtons(segurosElectricos, 'interior', 'start', 'interior', 'sergurosElectricos');
  const ConsolaConPortavasos = useCreateRadioButtons(consolaConPortavasos, 'interior', 'start', 'interior', 'consolaConPortavasos');
  const PantallaNavPlus = useCreateRadioButtons(pantallaNavPlus, 'interior', 'start', 'interior', 'pantallaNavPlus');
  const InteriorColor = useCreateRadioButtons(interiorColor, 'interior-color', 'start', 'interior', 'interiorColor');
  const Capacidad = useCreateRadioButtons(capacidad, 'capacidad', 'start', 'interior','capacidad');
  const AsientosYacabadosRadios = useCreateRadioButtons(asientosYAcabados.radios, 'asientos', 'start', 'interior', 'asientosYacabados');  
  const AsientosYAcabadosAccordians = useCreateAccordions(asientosYAcabados.accordions, 'interior', 'asientosYacabados');
  const { mobile} = useBreakpoints();
  return (
    <div style={{paddingLeft: 0, marginBottom: '30px'}}>
      <Stack className='interior-container' sx={{label:{
        margin:0
      }, h3:{
        margin: 0
    }, "div.MuiGrid-root":{
        margin: 0
    }}} direction='row' spacing={1}>
        
          <Grid alignSelf='flex-start' container width='fit-content' sx={{paddingRight: '10%'}}>
            <Grid sx={{width: "100%"}} container item>
            <Stack >
                <Stack height="1em"></Stack>
                <Stack height="1em"></Stack>
                <Stack justifyContent='space-between'spacing={0} sx={{"&.MuiStack-root h4": { m:0},
                "&.MuiStack-root div.SiNo":{
                    display: 'flex',
                    gap: '40px'}
            }} direction='row'><div></div><div className='SiNo'><h4 style={{ display: 'inline'}}>SI</h4><h4 style={{ display: 'inline-block'}}>NO</h4></div></Stack>
              
              <Stack direction='row' justifyContent='space-between'><h5 style={{padding: 0, margin: 0}}>Estereo Bocinas</h5>{EstereoBocinas}</Stack>
              <Stack direction='row'justifyContent='space-between'><h5 style={{padding: 0, margin: 0}}>Aire Acondicionado</h5>{VolanteDePosiciones}</Stack>
              <Stack direction='row'justifyContent='space-between'><h5 style={{padding: 0, margin: 0}}>Controles al volante</h5>{ConsolaConPortavasos}</Stack>
             <Stack direction='row'justifyContent='space-between'><h5 style={{padding: 0, margin: 0}}>Volante de posiciones</h5>{ AireAcondicionado}</Stack>
             <Stack direction='row'justifyContent='space-between'><h5 style={{padding: 0, margin: 0}}>Seguros Electricos</h5>{SegurosElectricos}</Stack>
             <Stack sx={{marginTop: '15px'}}justifyContent='center'>
             <Stack direction='row' justifyContent='space-between'><h5 style={{padding: 0, margin: 0}}>Consola con Poravasos</h5>{PantallaNavPlus}</Stack>
             <Stack direction='row' justifyContent='space-between'><h5 style={{padding: 0, margin: 0}}>Pantalla Nav Plus</h5>{ControlesAlVolante}</Stack>
            </Stack>
            </Stack>
            
            </Grid>
            </Grid> 
            <Grid alignSelf='flex-start' container width='fit-content' sx={{paddingRight: '10%'}}>
            <Grid sx={{width: "100%"}} container item>
        
            <Stack >
            <Stack height="1em"></Stack>
            <Stack height="1em"></Stack>
            <Stack height="1em"></Stack>
             <Stack justifyContent='space-between'>{InteriorColor}</Stack>
            <Stack>
            <h3 style={{margin: '10px 0', fontSize: '1.5rem'}}>Capacidad</h3>
                {Capacidad}
            </Stack>
            </Stack>
            
            </Grid>
            </Grid>
         
            <Grid alignSelf='flex-start' container width='fit-content'>
            <Grid sx={{width: "100%"}} container item>
            <Stack alignSelf='flex-start'>
            <Stack>
            <h3 style={{fontWeight: 'normal', margin: '10px 0', fontSize: '1.5rem'}}><span style={{fontWeight: 'bold'}}>Asientos</span> y acabados</h3>
                {AsientosYAcabadosAccordians}
                {AsientosYacabadosRadios}
            </Stack>
            </Stack>
            
            </Grid>
            </Grid>
         </Stack>
        </div>
  )
}
