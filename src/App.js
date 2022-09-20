import './App.css';
import './components/User.css';
import React, {Component, useState} from 'react';
import UserOutput from './components/UserOutput';



class App extends Component {
  state = {
    names: [
      { username: 'NoobMaster'},
      { username: 'Tenz'},
      { username: 'Ana'}
    ],
    otherState: 'some values'
  };

  switchUsernameHandler = (newName) => {
    this.setState({
      names: [
      { username: newName},
      { username: 'Ten2z'},
      { username: 'An33a'}
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({
      names: [
        { username: 'Noweasjlfj'},
        { username: event.target.value},
        { username: 'An33a'}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
      return (
        <div className="App">

          <button style={style} onClick={() => this.switchUsernameHandler('Nowebmeowster')}>Switch Username</button>
          <UserOutput username={this.state.names[0].username} changed={this.nameChangedHandler}/>
          <UserOutput username={this.state.names[1].username} click={this.switchUsernameHandler.bind(this, 'Thor')} changed={this.nameChangedHandler} >HEllow</UserOutput>
          <UserOutput username={this.state.names[2].username}  />




        </div>
      );
  }
}


export default App;
