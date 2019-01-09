import React from "react";

class AddTicketForm extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      ticket: "",
      name: "",
      unit: "",
      desc: "",
      completed: false
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    if (Object.values(this.state.ticket).length === 0) {
      //alert("Ticket number required!");'
      this.setState({
        error: true
      });
    } else {
      this.props.addTicket(this.state);
      this.setState({
        error: false,
        ticket: "",
        name: "",
        unit: "",
        desc: ""
      });
    }
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.state.error ? (
            <div className="alert alert-danger" role="alert">
              Ticket number required!
            </div>
          ) : null}
          <div className="form-group">
            Ticket #:
            <input
              className="form-control"
              type="text"
              name="ticket"
              value={this.state.ticket}
              onChange={this.onChange}
            />
          </div>
          <div>
            Name:
            <input
              className="form-control"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div>
            Unit:
            <input
              className="form-control"
              type="text"
              name="unit"
              value={this.state.unit}
              onChange={this.onChange}
            />
          </div>
          <div>
            Description:
            <input
              className="form-control"
              type="text"
              name="desc"
              value={this.state.desc}
              onChange={this.onChange}
            />
          </div>
          <div className="mt-2">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
export default AddTicketForm;
