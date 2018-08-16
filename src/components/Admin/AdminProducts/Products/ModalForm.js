import React from 'react';
import {Form, Input, Upload, Icon} from 'antd';

export const ModalForm = () => {
  return(
    <Form onSubmit={this.handleSubmit}>
      <Form.Item>
        <Input type="text" placeholder="ID" />
      </Form.Item>
      <Form.Item>
        <Input type="text" placeholder="Nombre" />
      </Form.Item>
      <Form.Item>
        <Input type="number" placeholder="Precio" />
      </Form.Item>
      <Form.Item>
        <Input type="text" placeholder="Stock" />
      </Form.Item>
      <Form.Item>
        <p>Imagen</p>
        <Upload.Dragger name="file" action="/upload.do">
          <p className="ant-upload-drag-icon">
            <Icon type="picture" />
          </p>
          <p className="ant-upload-text">Haz click o arrastra el archivo aquí</p>
        </Upload.Dragger>
      </Form.Item>
    </Form>
  )
};

