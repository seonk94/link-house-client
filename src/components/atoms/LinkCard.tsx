import {
  Card, Col, Image, Rate, Row,
} from 'antd';
import React, { useEffect } from 'react';
import Link from 'src/models/Link';
import NotFoundImage from 'src/assets/images/NotFound.png';
import { DeleteOutlined } from '@ant-design/icons';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';

const Header = styled(Row)`
  padding: 8px;
`;

interface Props {
  link: Link;
  handleUpdate: (partialLink: Partial<Link>) => void;
  handleDelete: (link: Link) => void;
}
const LinkCard = ({ link, handleUpdate, handleDelete }: Props) => {
  const aStyle = {
    display: 'block',
    color: 'inherit',
    textDecoration: 'none',
  };

  const [styles, api] = useSpring(() => ({
    from: { opacity: 0, y: '-30px' },
    to: { opacity: 1, y: '0px' },
  }));

  return (
    <animated.div style={{ ...styles }}>
      <Card
        hoverable
        bodyStyle={{
          padding: 0,
        }}
      >
        <Header align="middle" justify="center">
          <Col xs={12} style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {link.url}
          </Col>
          <Col xs={12} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Rate allowHalf value={link.grade} onChange={(value) => handleUpdate({ grade: value })} />
            <DeleteOutlined style={{ paddingLeft: '8px' }} onClick={() => handleDelete(link)} />
          </Col>

        </Header>
        <a href={link.url} target="_blank" rel="noreferrer" style={aStyle}>
          <Row>

            <Col span={16}>
              <div style={{ padding: '12px' }}>
                <h4 style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
                >
                  {link.title}

                </h4>
                <div style={{ flex: '1 1 0%' }}>
                  <p style={{
                    minHeight: '44px',
                    lineHeight: '22px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    wordBreak: 'break-word',
                    display: '-webkit-box',
                    color: 'rgba(0, 0, 0, 0.45)',
                    margin: 0,
                  }}
                  >
                    {link.description}
                  </p>
                </div>
              </div>
            </Col>
            <Col span={8}>
              <div style={{
                background: '#e6e6e6', display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center',
              }}
              >
                <Image
                  preview={false}
                  height={80}
                  width={80}
                  alt={link.title}
                  src={link.image || NotFoundImage}
                />
              </div>
            </Col>
          </Row>
        </a>
      </Card>
    </animated.div>
  );
};

export default LinkCard;
