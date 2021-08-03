import React from 'react';
import { Col, Row } from 'antd';
import SignInForm from 'src/modules/SignInForm';
import { useDispatch } from 'react-redux';
import userActions, { userConstants } from 'src/store/module/auth/actions';

const SignIn = () => {
  const dispatch = useDispatch();
  const handleSignIn = (values: { email: string, password: string}) => {
    dispatch(userActions.userLogin(values));
  };
  return (
    <>
      <Row justify="center">
        <Col xs={24} md={8} lg={6}>
          <SignInForm signIn={handleSignIn} />
        </Col>
      </Row>
    </>
  );
};
export default SignIn;
