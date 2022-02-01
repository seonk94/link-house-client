import {
  Form, Input, Button,
} from 'antd';
import React from 'react';

interface Props {
  signUp: (values: { email: string, password: string, passwordConfirm: string, name: string }) => void;
}
const SignUpForm = ({ signUp }: Props) => {
  const onFinish = (values: { email: string, password: string, passwordConfirm: string, name: string }) => {
    signUp(values);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 10 }}
      onFinish={onFinish}
      initialValues={{ layout: 'horizontal' }}
    >
      <Form.Item
        label="email"
        name="email"
        rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        hasFeedback
        rules={[
          { required: true, message: 'Please input your password!' },
          { min: 4, message: 'Please enter at least 4 characters.' },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SignUpForm;
