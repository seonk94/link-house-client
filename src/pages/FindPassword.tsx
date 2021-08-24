import { Col, Row } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import api from 'src/api';
import FindPasswordForm from 'src/modules/FindPasswordForm';

const FindPassword = () => {
  const history = useHistory();
  const handleFindPassword = async (values: { email : string, name : string}) => {
    const res = await api.auth.findPassword(values);
    if (res.data.userId) {
      history.push(`/init-password?id=${res.data.userId}`);
    } else {
      alert('The email or name is invalid.');
    }
  };
  return (
    <Row justify="center">
      <Col xs={24} md={8} lg={6}>
        <FindPasswordForm handleFinish={handleFindPassword} />
      </Col>
    </Row>
  );
};
export default FindPassword;
