import { Col, Divider, Form, Row } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import SignInForm from 'src/components/modules/SignInForm';
import userActions, { userConstants } from 'src/store/module/auth/actions';

const SignIn = () => {
  const dispatch = useDispatch();
  const handleSignIn = (values: { email: string; password: string }) => {
    dispatch(userActions.signInUser(values));
  };
  return (
    <>
      <Row justify="center">
        <Col xs={24} md={8} lg={6}>
          <SignInForm signIn={handleSignIn} />
          <Divider />

          <Form.Item style={{ textAlign: 'center' }}>
            <a href="/signup">Register now!</a>
          </Form.Item>

          <Form.Item style={{ textAlign: 'center' }}>
            <a href="/find-password">Find Password</a>
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};
export default SignIn;
