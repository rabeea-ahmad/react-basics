import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div>
        <h1 className="Profile-title"> {this.props.artist}</h1>
        <h3 className="Profile-subtitle"> {this.props.album} </h3>
      </div>
      );
  }
}

export default Profile;
