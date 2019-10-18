import React, { Component } from 'react';

export default class Keypad extends React.Component {

  tickle = () => {
    console.log('Tee hee!');
  }

  render() {
    return (
      <input type="password" />
    );
  }
}
