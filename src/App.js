import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import routes from './routes';

const router = createBrowserRouter(routes);
function App() {
  return (
    <div>
        <SideBar />
        <RouterProvider router={router}/>
        <Footer />
          </div>
  );
}

export default App;
