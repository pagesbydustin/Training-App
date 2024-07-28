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
  const [searchTerm, setSearchTerm] = useState("Search");

  const handleSearchButtonClick = () => {
    console.log("Search term: ", searchTerm);
  };

  return (
    <Navbar variant="light" bg="light" fixed="top" expand="md">
      <Navbar.Brand>
        <Image
          src="images/Hope-logo.png"
          alt="HLC Logo"
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
            <NavLink
              href="/"
              active={isActive === "home"}
              eventKey={"home"}
              onClick={() => setIsActive("home")}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="/lighting"
              active={isActive === "lighting"}
              eventKey={"lighting"}
              onClick={() => setIsActive("lighting")}
            >
              Lighting
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="/help"
              active={isActive === "help"}
              eventKey={"help"}
              onClick={() => setIsActive("help")}
            >
              <BiHelpCircle size={20} />
            </NavLink>
          </NavItem>
          <NavItem>
            <Form className="d-flex align-items-center">
              <FormControl
                type="input"
                placeholder="Search"
                id="search-bar"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button
                variant="dark"
                className="ms-2"
                onClick={handleSearchButtonClick}
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
