/* eslint-disable no-unused-vars */
import { Card, Container, Col, Row } from "react-bootstrap";
import { useState } from "react";

import { PDFViewer } from '../protected/pdfReader'


function LightingComponent() {
  const [pageNumber, setPageNumber] = useState(1);
  const maxPages = 5;

  function advancePage() {
    if (pageNumber < maxPages) {
      setPageNumber(pageNumber + 1);
    }
  }
  function goBack() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  const imgSrc = "https://hopetemecula.org/wp-content/uploads/2015/03/newlogo-e1597113852251.jpg";

  const ItemText = pageNumber === 1 ? "Turn on the programming device." : "Nothing here yet!";
  const ItemPageRender = `Page ${pageNumber}`; // Use template literal for clarity

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
          </Col>
        </Row>
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}>
            <Card>
              <Card.Header>
                <h3>Lighting Training</h3>
              </Card.Header>
              <Card.Body>
                <Card.Img
                  style={{ width: "150px" }}
                  variant="top"
                  src={imgSrc}
                />
                <Card.Text>
                  {ItemText}
                </Card.Text>
                <PDFViewer />
              </Card.Body>
              <Card.Footer>
              <Card.Text>
                  {ItemPageRender}
                </Card.Text>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
    </>
  );
}

export default LightingComponent;
