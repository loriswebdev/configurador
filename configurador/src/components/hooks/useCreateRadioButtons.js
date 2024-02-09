
import { FormControlLabel, Radio, RadioGroup,} from '@mui/material';
import React, { useEffect, useInsertionEffect, useLayoutEffect } from 'react'
import { useModel, useModelUpdate } from './ModelProvider';

export default function useCreateRadioButtons(radios, className, labelPlacement, category, subCategory= false) {
     const model = useModel();
     const setModel = useModelUpdate();

    const onChange = (e)=>{
        if(subCategory){
          setModel({ [category]: {...model?.[category], [subCategory]: {...model?.[category]?.[subCategory], value: e.target.value}}})
        }else{
          setModel({[category]: { value: e.target.value}})
        }
          
        
  
       
     
    }
    function isChecked(e){
      if(subCategory  && model[category] && model[category][subCategory]){
        return model[category][subCategory].value === e.value ? true : false;
  
      }else if(model[category]){
       return model[category].value === e.value ? true : false;
      }else{
        return false
      }
     
      
    }
    

    const options = radios.options.map((e)=>(
        
       
        <FormControlLabel labelPlacement={labelPlacement} key={e.value} onChange={onChange} checked={isChecked(e)}  control={<Radio inputProps={e.title ? {'title': e.title}:{'title': radios.summary}} name={e.name? e.name : radios.summary} value={e.value} />} label={e.label} />
  
  


))

return ( 
  <>
{radios.header && <h4>{<span>{radios.header}</span>} {radios.span && <span>{radios.span}</span>}</h4>}
<RadioGroup
    className={className}
    name="radio-buttons-group">
        {options}
        </RadioGroup>
        </> );
}
