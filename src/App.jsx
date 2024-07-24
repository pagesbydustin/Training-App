import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./Index";
import Slide from "./protected/Slide";
import { useState } from "react";

function NotFound() {
  return (
    <>
      <h1 className="text-bg-danger text-center">
        Error 404 - Item Not Found!
      </h1>
      <h3 className="text-bg-danger text-center">Page Not Found!</h3>
    </>
  );
}

function App() {
  return (
    <>
      <Container
        className="
       rounded-2 
       p-2
       m-auto"
      >
        <Row>
          <Col lg={2} />
          <Col lg={8}>
            <Router>
              <Routes>
                <Route path="/" element={<Index />} />{" "}
                {/* Route for Index component */}
                <Route path="/slide/:id" element={<Slide />} />{" "}
                {/* Route for Slide component with dynamic ID */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </Col>
          <Col lg={2} />
        </Row>
      </Container>
    </>
  );
}

export default App;
