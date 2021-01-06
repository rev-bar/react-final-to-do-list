
import { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import './ToDoList.css';

function ToDoList(props) {

const {newMission} = props
// console.log (newMission);

const [missions,setMissions] = useState([]);


useEffect ( ()=> {
  
    setMissions(missions.concat(newMission));
    //  console.log (missions);

},[newMission])


//perepering data for render:

const missionList = missions.map((item,index) =>  <ListGroup.Item  key= {index} >{item}</ListGroup.Item>  )

    return (
        <div>
            <ListGroup>
              {missionList}
            </ListGroup>
        </div>
    );
}

export default ToDoList;