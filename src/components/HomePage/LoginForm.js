import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import logo from '../../assets/logo.png'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from '../../redux/actions/loginActions';
import {logIn} from "../../services/authServices";
const FormItem = Form.Item;

class LoginForm extends React.Component{

  state = {
    user: {}
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        logIn(this.state.user)
          .then(r => {
            const user = r.user;
            const access_token = r.access_token;
            console.log(user);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('access_token', JSON.stringify(access_token));
            if (user.role === 'admin') {
              this.setState({user});
              this.props.history.push('/admin')
            } else {
              this.setState({user});
              this.props.history.push('/user');
            }
            console.log('state', this.state.user);
          })
          .catch(e => console.log(e))
      }
    });
  };

  handleChange = (e) => {
    const {user} = this.state;
    const field = e.target.name;
    user[field] = e.target.value;
    this.setState({user});
    console.log({user});
  };

  render(){
    const {getFieldDecorator} = this.props.form;
    return(
      <div>
        <Card >
          <div style={{maxWidth: '300px', paddingBottom: '20px'}}>
            <img alt="logo-allende" src={logo} width="50%" />
          </div>
          <Form onSubmit={this.handleSubmit} className="login-form" style={{ maxWidth: '300px', height: '30vh'}}>
            <FormItem>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Debes de indicar un correo electrónico' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Correo Electrónico" name="email" onChange={this.handleChange}/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Contraseña obligatoria' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Contraseña" name="password" onChange={this.handleChange}/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox style={{float: 'left'}}>Recuérdame</Checkbox>
              )}
              <a className="login-form-forgot" href="" style={{float: 'right'}}>¿Olvidaste tu contraseña?</a>
              <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%', marginTop: '30px'}}>
                Ingresar
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

LoginForm = Form.create()(LoginForm);

function mapStateToProps(state, ownProps){
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);


