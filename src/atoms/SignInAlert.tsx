import { Alert, Button } from 'antd';
import React from 'react';

const SignInAlert = () => (
  <Alert
    showIcon
    banner
    style={{ marginBottom: '24px' }}
    closable
    type="info"
    message="If you do not log in, it will not be saved."
    action={<a href="/signin"><Button size="small" type="primary">SignIn</Button></a>}
  />
);

export default SignInAlert;
