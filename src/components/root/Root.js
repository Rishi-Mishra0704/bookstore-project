import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Root = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default Root;
