import React from "react";
import ReactDOM from "react-dom";
import Tickets from "./components/Tickets";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App container">
        <Tickets />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
