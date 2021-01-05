import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Form, FormControl } from 'react-bootstrap';

function App() {
  return (
    <div >
    <Container>
      <Form.Group controlId="toDo">
          <Form.Label>toDos</Form.Label>
          <Form.Control type="text" placeholder="What's next?" />
      </Form.Group>
    </Container>

    </div>
  );
}

export default App;
