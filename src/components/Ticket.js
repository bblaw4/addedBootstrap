import React from "react";

const Ticket = ({
  id,
  ticket,
  unit,
  name,
  desc,
  completed,
  removeTicket,
  completeTicket
}) => {
  return (
    <div className="card mt-2">
      <div className="card-header">Ticket #: {ticket}</div>
      <div className="card-body">
        <p className="card-text">Unit: {unit.toUpperCase()}</p>
        <p className="card-text">Name: {name.toUpperCase()}</p>
        <p className="card-text">Description: {desc.toUpperCase()}</p>
        <p className="card-text">Completed: {completed ? "Yes" : "No"}</p>
        <button
          className="btn btn-warning mr-1"
          onClick={() => completeTicket(id)}
        >
          Complete
        </button>
        <button onClick={() => removeTicket(id)} className="btn btn-danger">
          Remove
        </button>
      </div>
    </div>
  );
};
export default Ticket;
