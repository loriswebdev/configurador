import { FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material'

import React, { useState } from 'react'
import CustomCarousel from './CustomCarousel'
import images from '../data/engineCarouselUrls.json'
import { useBreakpoints } from './hooks/useBreakpoints'
import { useModel, useModelUpdate } from './hooks/ModelProvider'

export default function Motor() {
  const model =useModel();
   
 const setMotor = useModelUpdate()
    const onChange = (e)=>{
            setMotor({engine: e.target.value});
    }
    const indexFunc = (
        e=> e.engine === model.engine
      )
      const { tablet} =useBreakpoints()
  return (
    <>
  
    <Stack minWidth={tablet? '250px': '22%'} justifyContent='center' >

   
    <h3>Motor</h3>
    <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue={model.engine}
    name="radio-buttons-group"
    sx={{width: '100%'}}
  >
    <FormControlLabel  labelPlacement='start'   control={<Radio classes={{className:'configurador-form'}}  checked={model.engine === 'cummins'} inputProps={{'title': 'motor'}} value='cummins' name="motor" onChange={onChange}/>} label='Cummins' />
    <FormControlLabel  labelPlacement='start' control={<Radio className='configurador-form' checked={model.engine === 'paccar'} inputProps={{'title': 'motor'}} value='paccar' name="motor" onChange={onChange}/>} label='Paccar' />

  </RadioGroup>
    
  

    <CustomCarousel width='100%' imgUrls={images} state={model} indexFunc={indexFunc}/>
    
    </Stack>
    
    </>

  )
}
