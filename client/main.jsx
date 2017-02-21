// basic imports React UI, Meteor and render for meteor
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
// npm packages installed and being imported for use
import injectTapEventPlugin from 'react-tap-event-plugin';
// import the components to be used, the main App.jsx
import App from '../imports/ui/App.jsx';

// this method call handles the injectTapEventPlugin
injectTapEventPlugin();

// meteor startup is run to the client only because of the folder structure
// this method will render the main App component at the location of render-target descibed in the html
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
