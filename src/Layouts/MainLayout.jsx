import React from 'react';
import NavBar from '../components/Shared/NavBar';
import Footer from '../components/Shared/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
          <NavBar></NavBar>
          <div><Outlet></Outlet></div>  
          <Footer></Footer>
        </div>
    );
};

export default MainLayout;