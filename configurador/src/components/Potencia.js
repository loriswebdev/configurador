import React from 'react'
import accordions from '../data/Potencia.json'
import useCreateAccordions from './hooks/useCreateAccordions';
import { Stack } from '@mui/material';
import { useBreakpoints } from './hooks/useBreakpoints';
export default function Potencia() {

 const { tablet} =  useBreakpoints()
    const groups = useCreateAccordions(accordions, 'potencia')
  return (
<Stack minWidth={tablet? '250px': '22%'}>
    
      <h3>Potencia</h3>



    {groups}

  
        </Stack>
      );
}
