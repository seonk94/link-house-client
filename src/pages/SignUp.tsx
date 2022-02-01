import { Col, Row } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import SignUpForm from 'src/components/modules/SignUpForm';
import userActions from 'src/store/module/auth/actions';

const SignUp = () => {
  const dispatch = useDispatch();
  const handleSignUp = (values: { email: string, password: string, passwordConfirm: string, name: string }) => {
    dispatch(userActions.signUpUser(values));
  };
  return (
    <>
      <Row justify="center">
        <Col xs={24} md={12}>
          <SignUpForm signUp={handleSignUp} />
        </Col>
      </Row>
    </>
  );
};
export default SignUp;
