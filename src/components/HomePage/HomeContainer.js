import React, { Component } from 'react';
import background from '../../assets/allende.jpg';
import LoginForm from "./LoginForm";

class HomeContainer extends Component{
  render(){
    return (
      <div style={{backgroundImage: `url("${background}")`, width: '100%', height: '100vh', backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <LoginForm history={this.props.history} />
      </div>
    );
  }
}

export default HomeContainer;