import React, { Component } from "react";
import "tabler-react/dist/Tabler.css";
import Graph from '../Graph/Graph';
import { formatComma, formatDate } from '../../utils/utilities'
import './Card.css'

import { Card, Table } from "tabler-react";

class MyCard extends Component {
  render() {
    return (
      <div className="poc-card">
        <Card>
          <Card.Header>
            <Card.Title>Daily Colorado Covid-19 Cases</Card.Title>
          </Card.Header>
          <Card.Body>
              <Graph data={this.props.data}/>
          </Card.Body>
        </Card>
        <div className="data-table">
          <Table>
            <Table.Header>
              <Table.ColHeader>Date</Table.ColHeader>
              <Table.ColHeader>Total Cases</Table.ColHeader>
            </Table.Header>
            <Table.Body>
            { this.props.data.map((day, i) => {
                return (
                  <Table.Row key={i}>
                    <Table.Col><p>{formatDate(day.Date)}</p></Table.Col>
                    <Table.Col>{formatComma(day.Cases)}</Table.Col>
                  </Table.Row>
                )
              })}              
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

export default MyCard;