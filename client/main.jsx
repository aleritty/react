import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { ReactiveVar } from 'meteor/reactive-var';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';

const MatApp = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

Meteor.startup(() => {
  render(<App />,document.getElementById('render-target'));
});
