// displays player information

// all components need to import basic packages
import React, { Component } from 'react';
// import material-ui components
import { Card, CardMedia, CardActions, CardText, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
// colour sets can change the look of material components
import { blue200, blue900 } from 'material-ui/styles/colors';

// styles is a permananent object that stores the CSS to be easily called in a component
const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: 12,
  },
};

// all components are represented by a class that extends the react component class
export default class Player extends Component {
// render will return() the html of the component
  render() {
    return (
// this card component was pulled directly from material ui, we just refactor
// confirm images are kept in the public folder!
      <Card>
        <CardMedia
          overlay={<CardTitle title="Tim" subtitle="Offense 100 - Defense 100" />}
        >
          <img src="player.jpg" />
        </CardMedia>
{/* chip is another material component, calling styles.chip apllies our preset css to the component
    content held within a div styles will be formatted to the style described in styles css */}
        <CardText>
          <div style={styles.wrapper}>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
              >
                <Avatar size={32} color={blue200} backgroundColor={blue900}>
                  3
                </Avatar>
                Ball manipulation
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
              >
                <Avatar size={32} color={blue200} backgroundColor={blue900}>
                  3
                </Avatar>
                Kicking abilities
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
              >
                <Avatar size={32} color={blue200} backgroundColor={blue900}>
                  3
                </Avatar>
                Passing abilities
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
              >
                <Avatar size={32} color={blue200} backgroundColor={blue900}>
                  3
                </Avatar>
                Tackling abilities
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
              >
                <Avatar size={32} color={blue200} backgroundColor={blue900}>
                  3
                </Avatar>
                Field speed coverage
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
              >
                <Avatar size={32} color={blue200} backgroundColor={blue900}>
                  3
                </Avatar>
                Blocking abilities
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
              >
                <Avatar size={32} color={blue200} backgroundColor={blue900}>
                  3
                </Avatar>
                Game stratergy
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
              >
                <Avatar size={32} color={blue200} backgroundColor={blue900}>
                  3
                </Avatar>
                Risk Taking
            </Chip>
          </div>
        </CardText>
        <CardActions>

        </CardActions>
      </Card>
    )
  }
}
