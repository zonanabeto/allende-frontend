import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import logo from '../../assets/logo.png'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from '../../redux/actions/loginActions';
const FormItem = Form.Item;

class LoginForm extends React.Component{

  state = {
    user: {
      email: 'allende@contacto.com',
      password: 'alo'
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.signIn(values);
        console.log('Received values of form: ', values);
      }
    });
  };

  signIn = (values) => {
    if (values.email === this.state.user.email && values.password === this.state.user.password) return this.props.history.push('/admin');
    return this.props.history.push('/');
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
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Correo Electrónico" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Contraseña obligatoria' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Contraseña" />
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
              <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%', marginTop: '30px'}} onClick={this.signIn}>
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


