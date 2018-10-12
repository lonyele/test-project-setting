import * as React from 'react';
import './App.css';

import logoSvg from './logo.svg';
import { TestHello } from './react/molecules/TestHello';
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logoSvg} className="App-logo" alt="logo" />

          <h1 className="App-title">Welcome to React</h1>
          <TestHello message="Hello~~~" />
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
