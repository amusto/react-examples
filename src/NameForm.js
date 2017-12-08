import React, { Component } from 'react';

class NameForm extends Component {
    constructor(props) {
      super(props);
      console.log(props);
      this.state = {
          name: this.props.firstName,
          body: 'Please write an essay about your favorite DOM element.'
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.name});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    render() {
        let divStyle = {
            width: '100%',
            'marginTop': '5px'    
          };

        return (
        <form onSubmit={this.handleSubmit}>
            <div style={divStyle}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
            </div>
            <div style={divStyle}>
                <label>
                    Body:
                    <textarea value={this.state.body} />            
                </label>          
            </div>    
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default NameForm;
