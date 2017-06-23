import React from 'react';
import { Component } from 'react';
import MessageDisplay from './messageDisplay';
import MessageInput from './messageInput';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {messages: []};
  }

  componentDidMount() {
    this.receiveConn = new WebSocket('ws://localhost:8080/ws');
    this.receiveConn.onopen = () => console.log('Receive Connected!');
    this.sendConn = new WebSocket('ws://localhost:8090/ws');
    this.sendConn.onopen = () => console.log('Send Connected!');
    this.receiveConn.onmessage = this.receiveMessage.bind(this);
  }

  componentWillUnmount() {
    this.receiveConn.close();
    this.sendConn.close();
  }

  sendMessage(msg) {
    this.sendConn.send(JSON.stringify(msg));
  }

  receiveMessage(e) {
    console.log(e.data);
    this.setState({messages: this.state.messages.concat(e.data)});
  }

  FARTS

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="navbar navbar-inverse">
              <div className="navbar-header">
                <a href="#" className="navbar-brand">CAChatApp</a>
              </div>
            </div>
            <MessageDisplay messages={this.state.messages} />
            <MessageInput onSend={this.sendMessage.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}
