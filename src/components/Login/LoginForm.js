import React from 'react';
import { Form, Icon, Input, Button, Card } from 'antd';
import logo from '../../assets/logo.png'
const FormItem = Form.Item;

export const LoginForm = ({onSubmit}) => {
  return(
    <div>
      <Card>
        <div style={{maxWidth: '300px', paddingBottom: '20px'}}>
          <img alt="logo-allende" src={logo} width="50%" />
        </div>
        <Form onSubmit={onSubmit} className="login-form" style={{ maxWidth: '300px', height: '30vh'}}>
          <FormItem>
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Correo Electrónico" name="email" />
          </FormItem>
          <FormItem>
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Contraseña" name="password" />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%', marginTop: '30px'}}>Ingresar</Button>
          </FormItem>
        </Form>
      </Card>
    </div>
  )
};