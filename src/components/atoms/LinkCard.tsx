import { DeleteOutlined, MoreOutlined } from '@ant-design/icons';
import { Button, Card, Col, Dropdown, Image, Menu, Rate, Row } from 'antd';
import React, { useCallback, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import NotFoundImage from 'src/assets/images/NotFound.png';
import Link from 'src/models/Link';
import styled from 'styled-components';

const HeaderRow = styled(Row)`
  padding: 8px;
`;

const HeaderTitle = styled.div`
  width: calc(100% - 24px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const HeaderIcon = styled.div`
  width: 24px;
  height: 24px;
`;

const ContentRow = styled(Row)`
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

const ActionRow = styled(Row)`
  padding: 8px;
  align-items: center;
`;

const IsWatch = styled.span`
  font-size: 12px;
  color: #595959;
`;
const IsNotWatch = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

interface Props {
  link: Link;
  handleUpdate: (partialLink: Partial<Link>) => void;
  handleDelete: (link: Link) => void;
  handleClick: (link: Link) => void;
  handleShowRateModal: (link: Link) => void;
  handleShowTagModal: (link: Link) => void;
}
const LinkCard = ({
  link,
  handleUpdate,
  handleDelete,
  handleClick,
  handleShowRateModal,
  handleShowTagModal,
}: Props) => {
  const aStyle = {
    display: 'block',
    color: 'inherit',
    textDecoration: 'none',
  };

  const [styles, api] = useSpring(() => ({
    from: { opacity: 0, y: '-30px' },
    to: { opacity: 1, y: '0px' },
  }));

  const handleStopEvent = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  }, []);

  const check = useCallback(
    (callback: (link: Link) => void) => (info: any) => {
      info.domEvent.stopPropagation();
      callback(link);
    },
    [],
  );

  const DropdownMenu = (
    <Menu>
      <Menu.Item key="delete" onClick={check(handleDelete)}>
        삭제
      </Menu.Item>
      <Menu.Item key="rate" onClick={check(handleShowRateModal)}>
        평점 설정
      </Menu.Item>
      <Menu.Item key="tag" onClick={check(handleShowTagModal)}>
        태그 설정
      </Menu.Item>
    </Menu>
  );

  return (
    <animated.div style={{ ...styles }}>
      <Card
        hoverable
        onClick={() => handleClick(link)}
        bodyStyle={{
          padding: 0,
        }}
        style={{
          borderRadius: '8px',
        }}
      >
        <HeaderRow align="middle">
          <HeaderTitle>
            🌐
            {link.url}
          </HeaderTitle>
          <HeaderIcon>
            <Dropdown trigger={['click']} placement="bottomLeft" overlay={DropdownMenu}>
              <Button onClick={handleStopEvent} shape="circle" size="small" icon={<MoreOutlined />} />
            </Dropdown>
          </HeaderIcon>
        </HeaderRow>
        {/* <a href={link.url} target="_blank" rel="noreferrer" style={aStyle}> */}
        <ContentRow>
          <Col span={16}>
            <div style={{ padding: '12px' }}>
              <h4
                style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {link.title}
              </h4>
              <div style={{ flex: '1 1 0%' }}>
                <p
                  style={{
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
            <div
              style={{
                background: '#e6e6e6',
                display: 'flex',
                justifyContent: 'center',
                height: '100%',
                alignItems: 'center',
              }}
            >
              <Image
                preview={false}
                height={80}
                width={80}
                alt={link.title}
                src={link.image || NotFoundImage}
                style={{ borderRadius: '8px' }}
              />
            </div>
          </Col>
        </ContentRow>
        {/* </a> */}
        <ActionRow>
          <Col sm={12}>
            {/* <Rate allowHalf value={link.grade} onChange={(value) => handleUpdate({ grade: value })} /> */}
          </Col>
          <Col sm={12}>
            <Row justify="end">
              {link.watchAt ? <IsWatch>✔️읽음</IsWatch> : <IsNotWatch>✨안읽음</IsNotWatch>}
              {/* <Button type="primary" style={{ marginRight: '4px' }} onClick={() => handleClick(link)}>새 탭 열기</Button>
              <Button onClick={() => handleDelete(link)}>삭제</Button> */}
            </Row>
          </Col>
        </ActionRow>
      </Card>
    </animated.div>
  );
};

export default LinkCard;
