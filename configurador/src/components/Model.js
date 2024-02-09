import React, { useEffect, useState } from 'react'
import imgUrls from '../data/carouselUrls.json';

import CustomCarousel from './CustomCarousel';
import { useModel, useModelUpdate} from './hooks/ModelProvider';
import { FormControlLabel, Radio, RadioGroup, Stack } from '@mui/material';
import { Container } from '@mui/system';
import Potencia from './Potencia';
import Motor from './Motor';
import { useBreakpoints } from './hooks/useBreakpoints';
export default function Model() {

  const model =useModel();
  const indexFunc =(
     e=> e.color === model.color && e.model === model.model && e.nextGen === model.nextGen
   )

const DevaultValue= (model)=>{
  switch(model.model){
    case '680':
    return model.nextGen? 't68076' : 't680'
    case '880':
    return 't880'
    case '370':
    return 't370' 
    default:
      return false
  }
}
  const setModel =useModelUpdate()
 const onChange = (e)=>{
switch(e.target.value){
  case 't68076':
  setModel({model: '680', nextGen: true})
  break;
  case 't680':
  setModel({model: '680', nextGen: false})
  break;
  case 't880':
  setModel({model: '880', nextGen: false})
  break;
  case 't370':
  setModel({model: '370', nextGen: false})
  break;
  default:
    setModel({model: '680', nextGen: true})
}

 }
 const {mobile, tablet, laptop}  = useBreakpoints();
  return (
    <>
    
    <Container  maxWidth='xl'>
    <h2 style={tablet ?{fontFamily: 'Georama, sans-serif', fontWeight: 600, textAlign: 'center'}: {fontFamily: 'Georama, sans-serif', fontWeight: 600}} ><span style={{fontWeight: '400'}}>Elige tu </span>unidad</h2>
    <Stack minWidth='100%'>
    <Stack direction={tablet ? 'column': 'row'} justifyContent={tablet ? 'center': ''} alignItems={tablet ? 'center': ''}>
    <Stack sx={tablet ? {m: '2  0px'}: {}}minWidth={tablet? '250px': '22%'} maxWidth={tablet ? '250px': ''}>
    <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    value={DevaultValue(model)}
    onChange={onChange}
    name="radio-buttons-group"
  >
    <FormControlLabel labelPlacement='start'  control={<Radio inputProps={{'title': 'unidad'}} name='unidad' value='t68076' />} label='T680 76"' />
    <FormControlLabel labelPlacement='start'  control={<Radio inputProps={{'title': 'unidad'}} name='unidad' value='t680' />} label='T680 52"' />
    <FormControlLabel labelPlacement='start'  control={<Radio inputProps={{'title': 'unidad'}} name='unidad' value='t880' />} label='T880' />
    <FormControlLabel labelPlacement='start'  control={<Radio inputProps={{'title': 'unidad'}} name='unidad' value='t370' />} label='T370' />
  </RadioGroup>
  

    
   </Stack>
   <div className='model-carousel'>
    <CustomCarousel className={mobile ? 'mobile' : tablet ? 'tablet' : 'laptop' } width={mobile?'250px': tablet? '450px': laptop? '500px' : '600px'} state={model} indexFunc={indexFunc} imgUrls={imgUrls}/>
    </div>
    </Stack> 
    <h2 className={mobile ?'mecanicas mobile' : tablet ? 'mecanicas tablet' : 'mecanicas'}>Características
<span > Mecánicas</span></h2> 
    <Stack justifyContent={tablet ? 'center': ''} minWidth='50%' direction={mobile ? 'column': 'row'} spaceing={2} >
    

    <Potencia/>
      <Motor/>
    </Stack>
   
   </Stack>
    </Container>
    </>
  )
}
