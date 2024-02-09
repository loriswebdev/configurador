import React, { useEffect } from 'react';
import { Route, createRoutesFromElements, RouterProvider, createHashRouter} from 'react-router-dom';
import './assets/scss/main.scss'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { routes } from './data/routes';
import { CssBaseline } from '@mui/material';
import { useModel, useModelUpdate } from './components/hooks/ModelProvider';



const App = () => {
    const setModel = useModelUpdate()
    const model = useModel()
    useEffect(() => {
      setModel({color: 'red', model: '680', nextGen: true, engine:'cummins'})
    }, [])
    useEffect(() => {
      console.log(model)
    }, [model])
    var pages = routes.map((e, index)=>{
        return e.path === '/'? <Route key={index} index element={e.element} />: <Route key={index} path={e.path} element={e.element}/>;
      })
    const router = createHashRouter(
        createRoutesFromElements(
            <Route path='/' >
        
            {pages}
         
                </Route>
            )
            ) 
    
return(
    <>
 
<CssBaseline>
<RouterProvider router={router}/>
</CssBaseline>


</>
)
}

export default App;
