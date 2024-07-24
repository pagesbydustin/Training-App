
import { Image, Button }from 'react-bootstrap';






export default function IndexComponent() {


    return (
        <>
            <div>
                <Image src='https://hopetemecula.org/wp-content/uploads/2015/03/newlogo-e1597113852251.jpg' />
            </div>
            <h1>Hope Training App</h1>
            <div className="card">
                <Button variant='light' key={"/lighting"} href='/lighting'>Lighting</Button>
                <p>
more to come..
                </p>
            </div>
        </>
    );

}