

import React from 'react'
import accordions from '../data/FrontAxle.json'
import useCreateAccordions from './hooks/useCreateAccordions';
import { useBreakpoints } from './hooks/useBreakpoints';

export default function FrontAxle() {
    const groups = useCreateAccordions(accordions, 'frontAxle');
    const {tablet}=useBreakpoints()
  return (
    <div style={tablet ? {width:'250px'} :{width: '25%'}}>
 
    <h3>Eje Delantero</h3>
    {groups}
                </div>
  )
}
