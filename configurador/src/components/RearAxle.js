

import React from 'react'
import accordions from '../data/RearAxle.json';
import useCreateAccordions from './hooks/useCreateAccordions';
import { useBreakpoints } from './hooks/useBreakpoints';

export default function RearAxle() {
    const groups = useCreateAccordions(accordions, 'rearAxle')
    const { tablet}=useBreakpoints()
  return (
    <div style={tablet ? {width:'250px'} :{width: '25%'}}>
    <h3>Eje Trasero</h3>
    {groups}
               </div>
  )
}
