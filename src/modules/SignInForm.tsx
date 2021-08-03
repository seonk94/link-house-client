import {
  Form, Input, Button, Checkbox,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react';

interface Props {
  signIn: (values: { email: string, password: string}) => void;
}
const SignInForm = ({ signIn }: Props) => {
  const onFinish = (values: { email: string, password: string}) => {
    signIn(values);
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      onFinish={onFinish}
      initialValues={{ remember: true }}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or
        {' '}
        <a href="/signup">register now!</a>
      </Form.Item>
    </Form>
  );
};
export default SignInForm;
