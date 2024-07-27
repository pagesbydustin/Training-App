import { Container, Row, Col } from 'react-bootstrap';
import NavComponent from './components/NavComponent';

import './App.css';
import './assets/css/bootstrap.min.css';

function App() {


  return (
    <>
      <Row id='navRow'>
        <Col>
          {/** Nav Component */}
          <NavComponent />
        </Col>
      </Row>
      <Container fluid>

        <Row id='bodyRow'>
          <Col></Col>
          <Col lg={8}>
            {/** Body Component(s) */}
            <Container><h1>Welcome</h1></Container>
          </Col>
          <Col></Col>
        </Row>

      </Container>
      <Row id='footerRow'>
        <Col>{/** Footer Component(s) */}</Col>
      </Row>
    </>
  )
}

export default App
