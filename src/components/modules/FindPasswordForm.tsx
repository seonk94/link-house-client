import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';

interface Props {
  handleFinish: (values: { email: string, name: string}) => void;
}

const FindPasswordForm = ({ handleFinish }: Props) => (
  <Form
    name="normal_login"
    className="login-form"
    onFinish={handleFinish}
    initialValues={{ remember: true }}
  >
    <Form.Item
      name="email"
      rules={[{ required: true, message: 'Please input your Email!' }]}
    >
      <Input placeholder="Email" />
    </Form.Item>
    <Form.Item
      name="name"
      rules={[{ required: true, message: 'Please input your Name!' }]}
    >
      <Input
        type="text"
        placeholder="name"
      />
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
        Find Password
      </Button>
    </Form.Item>
  </Form>
);
export default FindPasswordForm;
