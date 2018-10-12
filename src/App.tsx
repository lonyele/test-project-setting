import * as React from 'react';
import './App.css';

import logoSvg from './logo.svg';
import { TestHello } from './react/molecules/TestHello';

class App extends React.Component {
  public state = {
    color: 'orange'
  };

  private onChangeSkyblue = () => {
    this.setState({ color: 'skyblue' });
  };
  private onChangeGreen = () => {
    this.setState({ color: 'green' });
  };
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logoSvg} className="App-logo" alt="logo" />

          <h1 className="App-title">Welcome to React</h1>
          <TestHello message="Hello~~~" />
        </header>
        <button onClick={this.onChangeSkyblue}>Make skyblue</button>
        <button onClick={this.onChangeGreen}>Make green</button>
        <p className="App-intro" style={{ backgroundColor: this.state.color }}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
