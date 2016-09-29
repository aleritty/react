import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import AppBar from 'material-ui/AppBar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <div>Prova prova</div>
        </header>
        <main>
          <div>Prova prova</div>
        </main>
      <footer>
        <div>Prova prova</div>
      </footer>
      </div>
    );
  }
}
