// displays the team list is a child of App

// all components need to import basic packages
import React, { Component } from 'react';
// material ui imports
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';

// all components are represented by a class that extends the react component class
export default class TeamList extends Component {
// render will return() the html of the component
// this.props calls the specific information passed to this component
// in this case the player information passed into every TeamList item in renderPlayers()
  render() {
    return (
      <ListItem
        primaryText={this.props.player.name}
        leftAvatar={<Avatar src="player.jpg"/>}
      />
    )
  }
}
