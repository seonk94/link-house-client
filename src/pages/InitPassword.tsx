import { useHistory, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import InitPasswordForm from 'src/modules/InitPasswordForm';

const InitPassword = () => {
  const location = useLocation();
  const history = useHistory();
  const userId = new URLSearchParams(location.search).get('id');

  useEffect(() => {
    if (!userId) {
      alert('Invalid access.');
      history.push('/signin');
    }
  }, []);

  const handleFinish = async (values: { password: string }) => {
    // await api.auth.updateUser(userId as string, { password: values.password });
    // alert('Password change has been completed. Please log in again.');
    history.push('/signin');
  };
  return (
    <Row justify="center">
      <Col xs={24} md={12}>
        <InitPasswordForm handleFinish={handleFinish} />
      </Col>
    </Row>
  );
};

export default InitPassword;