/* eslint-disable no-unused-vars */
import { Card, Container, Col, Row } from "react-bootstrap";
import { useState } from "react";

function LightingComponent() {
  const [pageNumber, setPageNumber] = useState(1);
  const maxPages = 5;
  function advancePage() {
    if (pageNumber < maxPages && pageNumber > 0) {
      setPageNumber(pageNumber + 1);
    }
    return;
  }

  function goBack() {
    if (pageNumber <= maxPages && pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
    return;
  }

  let ItemRender = null;

  switch (pageNumber) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      ItemRender = <Card.Text>Page {pageNumber}</Card.Text>;
      break;

    default:
      ItemRender = <Card.Text>Page Unknown</Card.Text>;
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <h3>Lighting Training</h3>
              </Card.Header>
              <Card.Body>
                <Card.Img
                  variant="top"
                  src=""
                ></Card.Img>
                {ItemRender}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={2}></Col>
          <Col lg={8}></Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
    </>
  );
}

export default LightingComponent;
