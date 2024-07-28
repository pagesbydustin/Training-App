import {
  Image,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Tooltip,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { BiHelpCircle } from "react-icons/bi";
import { useState } from "react";

export default function NavComponent() {
  const [expanded, setExpanded] = useState(false);
  const [isActive, setIsActive] = useState("home");

  return (
    <Navbar variant="light" bg="light" fixed="top" expand="md">
      <Navbar.Brand>
        <Image
          src="src/assets/images/Hope-logo.png"
          alt="Your Logo"
          width={50}
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(!expanded)}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto" defaultActiveKey={"home"}>
          <NavItem>
            <NavLink eventKey={"home"} href="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey={"lighting"} href="/lighting">
              Lighting
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey={"help"} href="/help">
              <BiHelpCircle size={20} />
            </NavLink>
          </NavItem>
          <NavItem>
            <Form className="d-flex align-items-center">
              <FormControl type="input" placeholder="Search" id="search-bar" />
              <Button
                variant="dark"
                className="ms-2"
                onClick={() => console.log("Search Term - ")}
              >
                Go
              </Button>
            </Form>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
