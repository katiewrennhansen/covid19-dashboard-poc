import React, { Component } from "react";
import "tabler-react/dist/Tabler.css";
import Graph from '../Graph/Graph';


import { Card } from "tabler-react";

class MyCard extends Component {
  render() {
    return (
      <div className="poc-card">
        <Card>
          <Card.Header>
            <Card.Title>Daily Colorado COVID-19 Cases</Card.Title>
          </Card.Header>
          <Card.Body>
              <Graph data={this.props.data}/>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default MyCard;