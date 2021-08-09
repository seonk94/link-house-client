import { Card, Image, Rate } from 'antd';
import React from 'react';
import Link from 'src/models/Link';
import NotFoundImage from 'src/assets/images/NotFound.png';
import { DeleteOutlined } from '@ant-design/icons';

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
  return (
    <Card
      hoverable
      bodyStyle={{
        padding: 0,
      }}
      actions={[
        <DeleteOutlined onClick={() => handleDelete(link)} />,
      ]}
    >
      <a href={link.url} target="_blank" rel="noreferrer" style={aStyle}>
        <Card.Meta
          title={link.url}
          style={{
            padding: '12px',
          }}
        />
        <div style={{ background: '#e6e6e6', textAlign: 'center', height: '180px' }}>
          <Image
            preview={false}
            height={180}
            alt={link.title}
            src={link.image || NotFoundImage}
          />
        </div>
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
      </a>
      <div
        style={{
          borderTop: '1px solid #f0f0f0',
          display: 'flex',
          justifyContent: 'center',
          padding: '12px',
        }}
      >
        <Rate allowHalf value={link.grade} onChange={(value) => handleUpdate({ grade: value })} />
      </div>
    </Card>
  );
};

export default LinkCard;
