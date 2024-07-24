import { Image, Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link component

export default function IndexComponent() {
  return (
    <>
      <div>
        <Image src="https://hopetemecula.org/wp-content/uploads/2015/03/newlogo-e1597113852251.jpg" />
      </div>
      <h1>Hope Training App</h1>
      <Card className='bg-light'>
        <Card.Header>
            Lighting Trainer
        </Card.Header>
        <Card.Body>
            <Link to="/lighting">
             <Button>Go to lighting</Button>
            </Link>
        </Card.Body>
      </Card>
    </>
  );
}
