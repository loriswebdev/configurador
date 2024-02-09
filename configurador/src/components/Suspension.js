
import React, { useState } from 'react'
import buttons from '../data/Suspension.json'

import useCreateRadioButtons from './hooks/useCreateRadioButtons';
import useCreateAccordions from './hooks/useCreateAccordions';
import { useBreakpoints } from './hooks/useBreakpoints';

export default function Suspension() {
    const accordions = useCreateAccordions(buttons.accordions, 'suspension');
    const radios = useCreateRadioButtons(buttons.radios, '',  'start', 'suspension');
    const {tablet}=useBreakpoints()
    return (
    <div style={tablet ? {width:'250px'} :{width: '25%'}}>
 
    <h3>Suspensión</h3>
    {accordions}
   {radios}
              
            </div>
  )
}
