import React, { useState, useContext, createContext }  from "react";

const ModelContext = createContext()
const UpdateModelContext = createContext()
export function useModel(){
    return useContext(ModelContext)
}
export function useModelUpdate(){
    return useContext(UpdateModelContext)
}
export function ModelProvider({children}){

    const [model, setModel] = useState({});
    function updateModel(obj){

        setModel(prev => ({...prev, ...obj}));
    }

return(
    <>
    <ModelContext.Provider value={model}>
    <UpdateModelContext.Provider value={updateModel}>
    {children}
    </UpdateModelContext.Provider>
    </ModelContext.Provider>
    </>
)
}

