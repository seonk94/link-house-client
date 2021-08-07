import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Row } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { Header } from 'antd/lib/layout/layout';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

const Appbar = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    localStorage.removeItem('token');
  };
  return (
    <Header style={{
      background: '#fff',
      boxShadow: '0 2px 8px #f0f1f2',
    }}
    >
      <Row justify="space-between">
        <h2>LinkHouse</h2>
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
            <Avatar icon={<UserOutlined />} />
          </Dropdown>
        </div>
      </Row>
    </Header>
  );
};

export default Appbar;
