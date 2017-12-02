import React, { Component } from 'react';
import LoginView from './views/LoginView'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <LoginView/>
      </div>
    );
  }
}

function getTabs() {
  const tabsInstance = (
    <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
      <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
      <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
      <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
    </Tabs>
  );

  ReactDOM.render(tabsInstance, mountNode);
}

export default App;
