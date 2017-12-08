import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle.js';
import LoginControl from './LoginControl.js';
import NameForm from './NameForm.js';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  // Lifecycle hooks
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );    
  }
    
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>{this.state.date.toLocaleTimeString()}</div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Clock />
          <h1 className="App-title">Welcome to my React Application</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="first-row">

        </div>        

      </div>
    );
  }
}

/*class App extends Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }  

  render() {
    let user = {
      name: 'Armando Musto',
      email: 'armando.musto@gmail.com'
    };
    
    function Author(props) {
      let user = props.user;
      return <p className="App-user-details">{user.name} | {user.email}</p>;
    }

    function Mailbox(props) {
      const unreadMessages = props.unreadMessages;
      return (
        <div>
          <h1>Hello!</h1>
          {unreadMessages.length > 0 &&
            <h2>
              You have {unreadMessages.length} unread messages.
            </h2>
          }
        </div>
      );
    }

    const messages = ['React', 'Re: React', 'Re:Re: React'];
    //const numbers = [1, 2, 3, 4, 5];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Clock />
          <h1 className="App-title">Welcome to my React Application</h1>
          <Author user={user} />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="first-row">
          <div className="app-column">
            <Toggle />
            <LoginControl />
          </div>
          <div className="app-column">
            <NameForm firstName="Armando"/>
          </div>
          <div className="app-column">
            <Mailbox unreadMessages={messages} />        
            <div>
              <WarningBanner warn={this.state.showWarning} />
              <button onClick={this.handleToggleClick}>
                {this.state.showWarning ? 'Hide' : 'Show'}
              </button>
            </div>  
          </div>          
        </div>        

      </div>
    );
  }
}*/



/* function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
} */

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

export default App;
