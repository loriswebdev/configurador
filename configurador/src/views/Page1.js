import React from 'react'
import Model from '../components/Model'
import imgUrls from '../data/carouselUrls.json'
import { useModel, useModelUpdate } from '../components/hooks/ModelProvider';

import FrontAxle from '../components/FrontAxle';
import { Container, Stack} from '@mui/material';
import RearAxle from '../components/RearAxle';
import Suspension from '../components/Suspension';
import Transmision from '../components/Transmision';
import '../assets/scss/main.scss';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
    import { red } from '@mui/material/colors';
import { NavLink } from 'react-router-dom';
import { useBreakpoints } from '../components/hooks/useBreakpoints';

export default function Page1() {
   const setModel =useModelUpdate();
   const model = useModel()
const {mobile,tablet} = useBreakpoints();



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  textTransform: 'capitalize',
  fontFamily: 'inherit',
  fontSize: '1.5rem',
  borderRadius: 0,
  backgroundColor: red[500],
  '&:hover': {
    backgroundColor: red[700],
  },
}));

  return (
    <>
    <Container className={mobile ? 'mobile': tablet ? 'tablet':''}>
      
    <Stack minWidth='100%' justifyContent='center' alignItems='center'>
    <h1 className={mobile ? 'mobile': tablet? 'tablet' : 'laptop'}><span>Configura Tu Unidad</span> <span><span style={{color: red[500]}}>Kenworth</span> En Línea</span></h1>
    <Model model={model} setModel={setModel} imgUrls={imgUrls}/>
    

    <Container sx={{m: '30px 0'}} maxWidth='xl'>
    {tablet || mobile? <Stack minWidth='100%' justifyContent='center' alignItems= 'center'spacing={2}>
        <Stack minWidth='100%' justifyContent='center' alignItems= {mobile ? 'center':'flex-start'} direction= {mobile? 'column':'row'} spacing={2}>
        <Transmision/>
        <FrontAxle/>
        </Stack>
        <Stack justifyContent='center' alignItems= {mobile ? 'center':'flex-start'} minWidth='100%' direction= {mobile? 'column':'row'} spacing={2}>
        <RearAxle/>
        <Suspension/>
        </Stack>
    </Stack> :
    <Stack minWidth='100%' direction='row' spacing={3}>
        <Transmision/>
        <FrontAxle/>
        <RearAxle/>
        <Suspension/>
    </Stack>}
    
    </Container>
    <Container sx={{m: '30px 0'}}>
    <Stack minWidth='100%' direction='row' justifyContent={mobile || tablet ? 'center' : 'flex-end'}>
        <NavLink to='/page2'><ColorButton size='small'>Guardar y Continuar</ColorButton></NavLink>
    </Stack>
    </Container>
    </Stack>
    </Container>
    </>
  )
}
