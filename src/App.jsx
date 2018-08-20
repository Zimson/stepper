import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <h1 className="app__title">Welcome to React</h1>
        </header>
        <p className="app__intro">
          To get started, edit <code>src/App.js</code> and save tosdfsdfoad.
        </p>

        {/* language=SCSS */}
        <style jsx>
          {`
            .app {
              text-align: center;

              &__logo {
                animation: App-logo-spin infinite 20s linear;
                height: 100px;
              }

              &__header {
                background-color: #222;
                height: 150px;
                padding: 20px;
                color: white;
              }

              &__title {
                font-size: 1.5em;
              }

              &__intro {
                font-size: large;
              }

              @keyframes App-logo-spin {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default App;
