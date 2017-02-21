// the head component to be rendered by main.jsx in the render-target location of main.html

// all components need to import basic packages
import React, { Component } from 'react';
// these are imports for material-ui, they help with the styling of the components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
// you must import all the child components used
import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';

// all components are represented by a class that extends the react component class
export default class App extends Component {
// render will return() the html of the component
  render() {
    return (
// material-ui gives us access to material components eg; AppBar
// its also provides prebuild classNames eg; row, container
      <MuiThemeProvider>
        <div className = "container">
          <AppBar
            title="Soccer Application"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}/>
          <div className = "row">
            <div className = "col s12 n7"><Player /></div>
            <div className = "col s12 n5"><TeamStats /></div>
            <div className = "col s12 n5"><TeamList /></div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
