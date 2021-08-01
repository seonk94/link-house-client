import React from 'react';
import { Col, Row } from 'antd';
import SignInForm from 'src/modules/SignInForm';

const SignIn = () => (
  <>
    <Row justify="center">
      <Col xs={24} md={8} lg={6}>
        <SignInForm />
      </Col>
    </Row>
  </>
);
export default SignIn;
