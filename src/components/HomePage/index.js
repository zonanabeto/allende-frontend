import React, {Component} from 'react';
import LoginPage from './LoginPage';
import fondo from '../../assets/allende.jpg';

export class HomePage extends Component{
  render(){
    return(
      <div style={{backgroundImage: `url("${fondo}")`, width: '100%', height: '100vh', backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <LoginPage />
      </div>
    )
  }
}
