import 'babel-polyfill';
import 'unfetch/polyfill';
import React, { Component } from 'react';
import PromisePolyfill from 'es6-promise';

PromisePolyfill.polyfill();

class App extends Component {
  render() {
    return (
      <div className="stepper-app">
        <h1>Hello</h1>
        {/* language=SCSS */}
        <style jsx>
          {`
            .stepper-app {
              text-align: center;

              h1 {
                display: grid;
                transition: all 0.5s;
                user-select: none;
                background: linear-gradient(to bottom, white, black);
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default App;
