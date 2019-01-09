import React from "react";
import AddTicketForm from "./AddTicketForm";
import Ticket from "./Ticket";

class Tickets extends React.Component {
  constructor() {
    super();
    this.state = {
      tickets: []
    };
  }
  addTicket = ticket => {
    const ticketsCopy = this.state.tickets;
    ticketsCopy.push(ticket);
    this.setState({ tickets: ticketsCopy });
  };
  removeTicket = id => {
    const ticketsCopy = this.state.tickets;
    ticketsCopy.splice(id, 1);
    this.setState({ tickets: ticketsCopy });
  };
  completeTicket = id => {
    const ticketsCopy = this.state.tickets;
    //this.state.tickets[id].completed
    ticketsCopy[id].completed = !ticketsCopy[id].completed;
    this.setState({
      tickets: ticketsCopy
    });
  };
  render() {
    return (
      <div>
        <p>You have {this.state.tickets.length} ticket(s)</p>
        <AddTicketForm addTicket={this.addTicket} />
        {this.state.tickets.map((ticket, i) => {
          return (
            <Ticket
              removeTicket={this.removeTicket}
              completeTicket={this.completeTicket}
              key={i}
              id={i}
              ticket={ticket.ticket}
              name={ticket.name}
              unit={ticket.unit}
              desc={ticket.desc}
              completed={ticket.completed}
            />
          );
        })}
      </div>
    );
  }
}
export default Tickets;
