import React from 'react'

export default class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      input: ''
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewTask(this.state.input);
    this.setState( {
      input: ""
    });
  } 

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" value={this.state.input} onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>Add to List</button>
        </form> 
      </div>
    )
  }
}
