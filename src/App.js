import logo from './logo.svg';
import './App.css';
import './styles.css';  
import { useReducer } from 'react';
import TicketForm from './components/TicketForm';
<<<<<<< HEAD
import ticketReducer from './reducers/ticketReducer'; 

function App() {

  const initialState = {tickets: []};

  const [state, dispatch] = useReducer(ticketReducer, initialState);  

=======
import ticketReducer from './reducers/ticketReducer';
import TicketList from './components/TicketList';

function App() {

const initialState = {
  tickets: [  ],
}

const [state, dispatch] = useReducer(ticketReducer, initialState);
>>>>>>> f23cc7b2c3d3caeb7990c2c2e26d0b7c0a8d81ac

  return (
    <div className="App">
      <div className='container'>
        <h1>Bug Blaster</h1>
<<<<<<< HEAD
        <TicketForm dispatch={dispatch}/> 
=======
        <TicketForm dispatch = {dispatch}/>
        {state.tickets.length > 0 && 
        
        <div className="results"> 
        <h2>All Tickets</h2>
        
        <TicketList
        tickets={state.tickets}
        dispatch={dispatch}></TicketList>
        </div>
        }
        
>>>>>>> f23cc7b2c3d3caeb7990c2c2e26d0b7c0a8d81ac
      </div>
    </div>  
  );
}

export default App;
