import { Image, Navbar, Nav, NavItem, NavLink} from 'react-bootstrap';
import { useState } from 'react';

export default function NavComponent() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar variant='light' bg='light' fixed='top' expand="md">
      <Navbar.Brand>
        <Image src="src/assets/images/Hope-logo.png" alt="Your Logo" width={50}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='ms-auto'>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Lighting">Lighting</NavLink>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
