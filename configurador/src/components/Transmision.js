
import React from 'react'
import accordions from '../data/Transmision.json'
import useCreateAccordions from './hooks/useCreateAccordions';
import { useBreakpoints } from './hooks/useBreakpoints';
export default function Transmision() {

  const {tablet}=useBreakpoints()
  const groups = useCreateAccordions(accordions, 'transmission')
  return (
    <div style={tablet ? {width:'250px'} :{width: '25%'}}>
 
    <h3>Transmisión</h3>
    {groups}
    </div>
  )
}
