import React from 'react';
import { Component } from 'react';

export default class MessageInput extends Component {
  
  showMessages() {
    return this.props.messages.map((msg, index) => {
      return (
        <p key={index}>{msg}</p>
      );
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12 msg-display">
          <div className="well">{this.showMessages()}</div>
        </div>
      </div>
    );
  }
}