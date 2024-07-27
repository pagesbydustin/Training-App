import { Image, Navbar, Nav, NavItem, NavLink } from "react-bootstrap";
import { BiHelpCircle } from "react-icons/bi";
import { useState } from "react";

export default function NavComponent() {
  const [expanded, setExpanded] = useState(false);

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
            <NavLink key={"home"} href="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink key={"lighting"} href="/Lighting">
              Lighting
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink key={"lighting"} href="/Lighting">
              Help <BiHelpCircle />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
