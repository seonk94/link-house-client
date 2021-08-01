import { Col, Row } from 'antd';
import React from 'react';
import SignUpForm from 'src/modules/SignUpForm';

const SignUp = () => (
  <>
    <Row justify="center">
      <Col xs={24} md={12}>
        <SignUpForm />
      </Col>
    </Row>
  </>
);
export default SignUp;
