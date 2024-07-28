import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavComponent from './components/NavComponent';
import MainComponent from './components/MainComponent';
import LightingComponent from './components/LightingComponent';




function App() {


  return (
    <>
      <Router>

      <Container fluid>
        <Row id='navRow'>
          <Col>
            {/** Nav Component */}
            <NavComponent />
          </Col>
        </Row>
        

          <Row id='bodyRow' className='body-row'>
            <Col></Col>
            <Col lg={8}>
              {/** Body Component(s) */}
              
                <Routes>
                  <Route path='/' element={<MainComponent />} />
                  <Route path='/lighting' element={<LightingComponent />} />
                </Routes>
         
            </Col>
            <Col></Col>
          </Row>

        </Container>
        <Row id='footerRow'>
          <Col>{/** Footer Component(s) */}</Col>
        </Row>
      </Router>
    </>
  )
}

export default App
