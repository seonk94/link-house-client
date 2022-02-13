import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import {
  Button, Dropdown, Menu, Row,
} from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { Header } from 'antd/lib/layout/layout';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const ClickableHeader = styled.h2`
  cursor: pointer;
`;

const Appbar = () => {
  const history = useHistory();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    localStorage.removeItem('token');
  };

  const handleClickHeader = () => {
    history.push('/');
  };
  return (
    <Header style={{
      background: '#fff',
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      boxShadow: '0 2px 8px #f0f1f2',
    }}
    >
      <Row justify="space-between">
        <ClickableHeader onClick={handleClickHeader}>🏠LinkHouse</ClickableHeader>
        <div>
          <Dropdown
            trigger={['click']}
            overlay={(
              <Menu>
                {
                  user
                    ? (
                      <Menu.Item key="logout" onClick={handleLogout}>
                        <a href="/signin">Sign Out</a>
                      </Menu.Item>
                    )
                    : (
                      <Menu.Item key="signin">
                        <a href="/signin">Sign In</a>
                      </Menu.Item>
                    )
                }
              </Menu>
            )}
            placement="bottomRight"
          >
            {
              user
                ? (
                  <Avatar style={{ cursor: 'pointer', color: '#f56a00', backgroundColor: '#fde3cf' }}>
                    {user.name[0].toUpperCase()}
                  </Avatar>
                )
                : (
                  <Avatar style={{ cursor: 'pointer', backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                )
            }
          </Dropdown>
        </div>
      </Row>
    </Header>
  );
};

export default Appbar;
