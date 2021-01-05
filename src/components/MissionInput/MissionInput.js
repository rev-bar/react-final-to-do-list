import React from 'react';
import './MissionInput.css';
import { Form, FormControl } from 'react-bootstrap';

function MissionInput(props) {
    return (
        <Form.Group controlId="toDo">
            <Form.Label>toDos</Form.Label>
            <Form.Control type="text" placeholder="What's next?" />
         </Form.Group>
        
    );
}

export default MissionInput;