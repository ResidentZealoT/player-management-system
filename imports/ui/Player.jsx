// displays player information

// all components need to import basic packages
import React, { Component } from 'react';
// import material-ui components
import { Card, CardMedia, CardActions, CardText, CardTitle } from 'material-ui/Card';

// all components are represented by a class that extends the react component class
export default class Player extends Component {
// render will return() the html of the component
  render() {
    return (
// this card component was pulled directly from material ui, we just refactor
// ensure images are kept in the public folder!
      <Card>
        <CardMedia
          overlay={<CardTitle title="Tim" subtitle="Offense 100 - Defense 100" />}
        >
          <img src="profile.jpg" />
        </CardMedia>
        <CardText>
          blurb
        </CardText>
        <CardActions>

        </CardActions>
      </Card>
    )
  }
}
