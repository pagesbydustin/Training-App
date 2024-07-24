import { Card, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function LightingComponent() {
    const [pageNumber, setPageNumber] = useState(1);
    const maxPages = 5;
    function advancePage() {
        if (pageNumber < maxPages && pageNumber > 0) {
            setPageNumber(pageNumber + 1)
        }
        return;
    }

    function goBack(){
        if (pageNumber <= maxPages && pageNumber > 1) {
            setPageNumber(pageNumber - 1)
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
            ItemRender = <Card.Text className=''>Page {pageNumber}</Card.Text>;
            break;

        default: ItemRender = <Card.Text>Page Unknown</Card.Text>
    }
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