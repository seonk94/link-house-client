import {
  Form, Input, Button,
} from 'antd';
import React from 'react';

interface Props {
  handleFinish: (values: { password: string }) => void;
}

const InitPasswordForm = ({ handleFinish }: Props) => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 10 }}
    onFinish={handleFinish}
    initialValues={{ layout: 'horizontal' }}
  >

    <Form.Item
      label="New Password"
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

export default InitPasswordForm;
