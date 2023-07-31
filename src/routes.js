import About from "./paginas/About";
import Home from "./paginas/Home";
import Venta from "./paginas/Venta";
import NotFound from "./paginas/NotFound";
import Contact from "./paginas/Contact";

const routes = [
    {path:"/", element:<Home/>},
    {path:"/quienesomos", element:<About/>},
    {path:"/venta", element:<Venta/>},
    {path:"/contacto", element:<Contact/>},
    {path:"/*", element:<NotFound/>},
];

export default routes;