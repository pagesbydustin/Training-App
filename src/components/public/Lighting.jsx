import { Container, Nav, Navbar, NavLink, NavbarBrand } from 'react-bootstrap';

function LightingComponent() {
    return (

        <>
            <Navbar>
                <NavbarBrand>

                    <img
                        src="https://hopetemecula.org/wp-content/uploads/2015/03/newlogo-e1597113852251.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="HLC logo" />{" "}
                    HLC

                </NavbarBrand>
                <Nav activeKey={"Lighting"}>
                    <NavLink key={"/"} href='/'>Home</NavLink>
                    <NavLink key={"lighting"} href='/lighting'>Lighting</NavLink>
                </Nav>
            </Navbar>
            <Container>
            </Container>
        </>

    );
}

export default LightingComponent;