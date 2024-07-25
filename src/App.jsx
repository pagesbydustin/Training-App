/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexComponent from './components/public/IndexComponent';
import LightingComponent from './components/public/LightingComponent';
import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';

import './assets/css/App.css';




function App() {


  return (
    <>
    <Router>
      <Navbar fixed='top' bg="light" data-bs-theme="Light" >
        <NavbarBrand>

          <img
            src="https://hopetemecula.org/wp-content/uploads/2015/03/newlogo-e1597113852251.jpg"
            height="40"
            className="d-inline-block align-top"
            alt="HLC logo" />{" "}
          HLC

        </NavbarBrand>
        <Navbar.Collapse className=" justify-content-end">
          <Nav>
            <NavLink href='/'>
            Home
            </NavLink>
            <NavLink href='/lighting'>
             Lighting
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid="lg" className='clear-nav'>

        
          <Routes>
            <Route path={"/"} element={<IndexComponent />} />
            <Route path={"/lighting"} element={<LightingComponent />} />
          </Routes>
        
      </Container>
      </Router >
    </>
  )
}

export default App
