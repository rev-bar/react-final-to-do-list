import { useState } from 'react';
import { Container } from 'react-bootstrap';
import MissionInput from '../../components/MissionInput/MissionInput';
import ToDoList from '../../components/ToDoList/ToDoList';

// import ToDoList from './components/ToDoList/ToDoList';

function ToDoPage(props) {


    const [missionToList,setMissionToList] = useState("");
    // console.log (missionToList);
    return (
        <Container>
        <MissionInput onAddMission={value=> setMissionToList(value) } />
        <ToDoList newMission={missionToList}/>
      </Container>
    );
}

export default ToDoPage;