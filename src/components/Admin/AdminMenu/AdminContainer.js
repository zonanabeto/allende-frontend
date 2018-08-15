import React, {Component} from 'react';
import AdminPanel from "./AdminPanel";
import AdminRoutes from "./AdminRoutes";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productsActions from '../../../redux/actions/productsActions';

class AdminContainer extends Component{

  componentWillMount() {
    if(!localStorage.getItem('user')) return this.props.history.push('/');
  }

  logOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    this.props.history.push('/')
  };

  render(){
    return(
      <div style={{ display: 'flex'}}>
        <AdminPanel />
        <AdminRoutes logOut={this.logOut} products={this.props.products} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    products: state.products
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(productsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer);