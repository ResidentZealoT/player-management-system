// the head component to be rendered by main.jsx in the render-target location of main.html

// all components need to import basic packages
import React, { Component } from 'react';
// these are imports for material-ui, they help with the styling of the components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import  Divider from 'material-ui/Divider';
// you must import all the child components used
import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';

// all components are represented by a class that extends the react component class
export default class App extends Component {
// use constructor to handle initial state
  constructor(props) {
// constructors use super to fetch state from component
    super(props);
// sets the initial state to an empty player array
    this.state = { players: [] };
  }
// a react component lifecycle method, load data when component to be mounted on
  componentWillMount() {
    this.setState({ players: [{
      _id: 1,
      name: "Tim the wonderous",
      ballManipulation: 3,
      kickingAbilities: 3,
      passingAbilities:3,
      tackling:3,
      fieldCoverage:3,
      blockingAbilities:3,
      gameStratergy:3,
      risks:3,
    },
    {
      _id: 2,
      name: "Simone the dork",
      ballManipulation:1,
      kickingAbilities:1,
      passingAbilities:1,
      tackling:1,
      fieldCoverage:1,
      blockingAbilities:1,
      gameStratergy:1,
      risks:1,
    },
    {
      _id: 3,
      name: "Dan the forgettable",
      ballManipulation:2,
      kickingAbilities:2,
      passingAbilities:2,
      tackling:2,
      fieldCoverage:2,
      blockingAbilities:2,
      gameStratergy:2,
      risks:2,
    },
  ]});
}
// takes the states players list and maps them to a TeamList component
  renderPlayers() {
// map applies the same process to every element of a list in this case
// map adds each player into an html TeamList component
    return this.state.players.map((player) => (
      <TeamList key={player._id} player={player} />
    ));
  }
// render will return() the html of the component
  render() {
    return (
// material-ui gives us access to material components eg; AppBar
// its also provides prebuild classNames eg; row, container
// you can run javascript code from within the html within{}
      <MuiThemeProvider>
        <div className = "container">
          <AppBar
            title="Soccer Application"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}/>
          <div className = "row">
            <div className = "col s12 m7"><Player /></div>
            <div className = "col s12 m5">
              <h2>Team List</h2>
              <Divider />
                <List>
                  {this.renderPlayers()}
                </List>
              <Divider />
            </div>
            <div className = "col s12 m5"><TeamStats /></div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
