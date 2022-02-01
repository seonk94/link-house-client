import { Col, Row } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import FindPasswordForm from 'src/components/modules/FindPasswordForm';
import { authService } from 'src/services/auth';

const FindPassword = () => {
  const history = useHistory();
  const handleFindPassword = async (values: { email : string, name : string}) => {
    const res = await authService.findPassword(values);
    if (res.userId) {
      history.push(`/init-password?id=${res.userId}`);
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
