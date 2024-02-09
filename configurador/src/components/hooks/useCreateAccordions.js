import { FormControl } from '@mui/base';
import { Accordion, AccordionDetails, AccordionSummary, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useModel } from './ModelProvider';
import { useModelUpdate } from './ModelProvider';
export default function useCreateAccordions(accordions, category, subCategory=false) {
  const model = useModel();
  const setModel = useModelUpdate()
  const onChange = (e)=>{
     if(e.target.checked){
        if(subCategory){
          setModel({[category]: {...model[category], [subCategory]:{ ...model[category][subCategory], value: e.target.value}}})
        }else{
          setModel({[category]: {...model[category], value: e.target.value}})
        }
 
      

     }
   
  }
  const onChangeAccordion = (index)=>{  
    if(subCategory){
     
        setModel({[category]: {[subCategory]: {...model[category][subCategory], expanded: index}}})
      
     
    }else{

      setModel({[category]: {...model[category], expanded: index}})
      
    }
  }
  const onAccordionClick = (index)=>{
   
      if(subCategory){
        if(model[category][subCategory]?.expanded === index){
          setModel({[category]: {[subCategory]: {...model[category][subCategory], expanded: null}}})
        }
       
      }else{
        if(model[category]?.expanded === index){
        setModel({[category]: {...model[category], expanded: null}})
        }
      }
      

  }
    const groups = accordions ? accordions.groups.map((e, index)=>(<Accordion expanded={subCategory ? model?.[category]?.[subCategory]?.expanded === index? true:  false:model?.[category]?.expanded === index? true: false}  onChange={()=> (onChangeAccordion(index))} key={e.label} className='accordion'>
    <AccordionSummary onClick={()=>onAccordionClick(index)}
      expandIcon={<ExpandMoreIcon />}
      className='spec-options-container'
    >
      <Typography>{e.label}</Typography>
    </AccordionSummary>
    <AccordionDetails>
    <FormControl>
  


    {e.options.map((e)=>(
 
        <RadioGroup
  name="radio-buttons-group"  key={e.value}>
        <FormControlLabel labelPlacement='start' onChange={onChange} checked={subCategory? model?.[category]?.[subCategory]?.value === e.value ? true : false: model?.[category]?.value === e.value ? true : false}  control={<Radio sx={{
    '& .MuiSvgIcon-root': {
      fontSize: '1rem',
    },}} inputProps={{'title': accordions.summary}} name={accordions.summary} value={e.value} />} label={e.label} />
        </RadioGroup>

  ))}

  
  

  </FormControl>
    </AccordionDetails>
  </Accordion >
)): '';
return groups;
}
