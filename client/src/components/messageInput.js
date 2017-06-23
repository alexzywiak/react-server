import React from 'react';
import { Component } from 'react';

export default class MessageInput extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e){
    this.props.onSend(this.state.value);
    this.setState({value: ''});
    e.preventDefault();
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="input-group">
            <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control"/>
            <span className="input-group-btn">
              <button onClick={this.handleSubmit} className="btn btn-success" type="button">Drop Knowledge Bombs!</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}