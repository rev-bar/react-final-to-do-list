import { Container } from 'react-bootstrap';
import MissionInput from '../../components/MissionInput/MissionInput';

// import ToDoList from './components/ToDoList/ToDoList';

function ToDoPage(props) {
    return (
        <Container>
        <MissionInput/>
        {/* <ToDoList newMission= {}/> */}
      </Container>
    );
}

export default ToDoPage;