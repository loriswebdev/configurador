import Page1 from "../views/Page1";
import Page2 from "../views/Page2";
import Page3 from "../views/Page3";
import Page4 from "../views/Page4";


export  const routes = 
 [
        {
            name: "page1",
            path: "/",
           
            element: <Page1/>,
            type: 'nav-link',
        },
        {
            name: "page2",
            path: "/page2",
           
            element: <Page2/>,
            type: 'nav-link',
        },
        {
            name: "page3",
            path: "/page3",
           
            element: <Page3/>,
            type: 'nav-link',
        },
        {
            name: "page4",
            path: "/page4",
           
            element: <Page4/>,
            type: 'nav-link',
        },
    ]