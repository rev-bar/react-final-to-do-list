import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MissionInput.css';
import { Form } from 'react-bootstrap';




function MissionInput(props) {

   const [inputValue,setInputValue] = useState("");
   const [newMission,setNewMission] = useState("");
   const [onAddMission,setOnAddMission] = useState("");
    
    // function addMissionToList(){


    // }
console.log (inputValue);
console.log (newMission);

    return (
        <Form.Group controlId="toDo">
            <Form.Label>toDos</Form.Label>
            <Form.Control type="text" placeholder="What's next?"  value = {inputValue} onChange= {e=> setInputValue(e.target.value)} />
            <button  onClick={e=> setNewMission(inputValue)} >add</button> 
         </Form.Group>
        
    );
}

export default MissionInput;