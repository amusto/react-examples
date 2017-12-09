import React, { Component } from 'react';

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

  export default Clock