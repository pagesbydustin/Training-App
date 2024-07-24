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


            <Card>
                <Card.Header as={"h3"}>
                    Lighting {pageNumber}
                </Card.Header>
                <Card.Body>
                    <Row><Col><Card.Img className='w-50' variant='top' src='https://hopetemecula.org/wp-content/uploads/2015/03/newlogo-e1597113852251.jpg' /></Col></Row>
                    <Row style={{ height:300 }}>
                        <Col lg={2} align-middle><FiChevronLeft size={35} onClick={ goBack }/></Col>
                        
                        <Col lg={8} >
                        <p>More testing</p>
                            { ItemRender }
                        </Col>
                        <Col lg={2}><FiChevronRight size={35} onClick={ advancePage }/></Col>
                    </Row>


                </Card.Body>
                <Card.Footer className='bg-light'>
                    <Card.Text>2024</Card.Text>
                </Card.Footer>
            </Card>

        </>

    );
}

export default LightingComponent;