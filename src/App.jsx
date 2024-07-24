/* eslint-disable no-unused-vars */
import { useInsertionEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import IndexComponent from './components/public/IndexComponent';
import { Container } from 'react-bootstrap';

import './App.css';

import 'bootstrap/dist/css/'
import LightingComponent from './components/public/Lighting';

function App() {




  return (

    <Container fluid="lg">
      <Outlet />
      <Router>
        <Routes>
        <Route path={ "/" } element={ <IndexComponent/> } />
        <Route path={ "/lighting" } element={ <LightingComponent/> } />
        </Routes>
      </Router >
    </Container>


  )
}

export default App
