import React, { useRef } from 'react'
import { useModel, useModelUpdate } from './hooks/ModelProvider';

export default function CarouselRadioButton({className ,title, name, value, label, contextObj}) {
    const setModel = useModelUpdate();
    const model = useModel()
    const checked = useRef()
const onChange = ()=>{
    if( checked.current.checked){
        setModel(contextObj)
       }
    console.dir(checked.current.checked);
}

    
    return (
    <>
    <input ref={checked} onChange={onChange} className={"configurador-form"+' '+className} title={title} name={name} type="radio" value={value} /><label for={name}>{label}</label>
    </>
  )
}

