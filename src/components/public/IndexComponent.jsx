import {
  Image,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  ListGroup,
} from "react-bootstrap";

import { FiBookOpen } from 'react-icons/fi';

export default function IndexComponent() {
  return (
    <>
      <Container fluid style={{ height: "80vh" }}>
        <Row>
          <Col>
            <Image src="https://hopetemecula.org/wp-content/uploads/2015/03/newlogo-e1597113852251.jpg" />

            <h1>Hope Training App</h1>
            <h3 style={{ color: "rgba(0,0,0,0)" }}>
              <FiBookOpen color="rgba(0,0,0,.80)" size={30} />
              <span>- - - - - - - - - - - -</span>
              <FiBookOpen color="rgba(0,0,0,.80)" size={30} />
            </h3>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <br />
            <Dropdown as={ListGroup}>
              <Dropdown.Toggle variant="secondary" id="dropdown">
                Select a training
              </Dropdown.Toggle>

              <DropdownMenu variant="dark">
                <DropdownItem href="/lighting">Lighting Training</DropdownItem>
                <DropdownItem disabled>More to Come ...</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
