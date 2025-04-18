 
import { type } from "@testing-library/user-event/dist/type";
import React ,{useState} from "react";

export default function TicketForm({dispatch}) {
    const [title , setTitle] = useState('');
    const [description , setDescription] = useState('');
    const [priority , setPriority] = useState('');

    const priorityLabels = {
        1: 'Low',
        2: 'Medium',   
        3: 'High'
    }
    const clearForm = () => {
        setTitle('');
        setDescription('');
        setPriority(" ");
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        clearForm();
    }
    const ticketData = {
        id : new Date().toISOString(),
        title,
        description,
        priority,
    }
    
    dispatch ({
        type: 'ADD_TICKET',
        payload: ticketData,
    })

    return(
        <form onSubmit={handleSubmit}  className="ticket-form">
            <div>
                <label>Title</label>
                <input 
                type="text"
                 value={title} 
                 className="form-input" 
                 onChange={e => setTitle(e.target.validationMessage)}>
                    
                 </input>
            </div>
            <div>
                <label>Description</label>
                <textarea 
                type="text"
                 value={title} 
                 className="form-input" 
                 onChange={e => setDescription(e.target.validationMessage)}>
                 </textarea>
            </div>
            
            <fieldset className="priority-fieldset">
                <legend>Priority</legend> 
                {
                    Object.entries(priorityLabels).map(([value, label]) => (
                        <label key={value} className="priority-label">
                            <input 
                            type="radio" 
                            value={value} 
                            checked={priority === value}
                            className="priority-input"
                            onChange={(e) => setPriority(e.target.value)}>
                            </input>
                        {label}
                        </label>
                    ))
                }
            </fieldset>
            <button type="submit" className="button">Submit</button>
        </form>
    );
}