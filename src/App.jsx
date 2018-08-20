import 'babel-polyfill';
import 'unfetch/polyfill';
import React, { Component } from 'react';
import PromisePolyfill from 'es6-promise';

PromisePolyfill.polyfill();

class App extends Component {
  render() {
    return (
      <div className="stepper-app">
        {/* language=SCSS */}
        <style jsx>
          {`
            .stepper-app {
              text-align: center;
            }
          `}
        </style>
      </div>
    );
  }
}

export default App;
