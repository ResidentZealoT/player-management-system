// displays the team list is a child of App

// all components need to import basic packages
import React, { Component } from 'react';

// all components are represented by a class that extends the react component class
export default class TeamList extends Component {
// render will return() the html of the component
  render() {
    return (
      <h1 >Team List</h1>
    )
  }
}
