import React  from "react";

export default  function TicketItem({ticket, dispatch}) {

    const {id, title, description, priority} = ticket;
    const priorityLClass = {
        1: 'low-priority',
        2: 'medium-priority',
        3: 'high-priority'
    }


    return (
        <div className="ticket">
           <div className={`priority-dot ${priorityLClass[ticket.priority]}`}></div>

           <h3>{title}</h3>
           <p>{description}</p>
        </div>
    )

}