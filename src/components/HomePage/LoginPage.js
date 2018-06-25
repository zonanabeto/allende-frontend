import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import logo from '../../assets/logo.png'
const FormItem = Form.Item;

class LoginPage extends React.Component{

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
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
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Favor de introducir correo' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Correo Electrónico" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Favor de introducir contraseña' }],
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
              <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%', marginTop: '30px'}} >
                Ingresar
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

LoginPage = Form.create()(LoginPage);

export default LoginPage


