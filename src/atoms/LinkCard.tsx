import { Card, Image } from 'antd';
import React from 'react';
import Link from 'src/models/Link';
import NotFoundImage from 'src/assets/images/NotFound.png';

const LinkCard = ({ link }: { link: Link }) => (
  <Card
    title={link.url}
    cover={(
      <div style={{ background: '#e6e6e6', textAlign: 'center' }}>
        <Image
          preview={false}
          height={180}
          alt={link.title}
          src={link.image || NotFoundImage}
        />
      </div>
    )}
  >
    <Card.Meta
      title={link.title}
      style={{
        paddingBottom: '8px',
      }}
    />
    <div
      className="ant-card-meta-description"
      style={{
        maxHeight: '44px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        wordBreak: 'break-word',
        display: '-webkit-box',
      }}
    >
      {link.description}
    </div>
  </Card>
);

export default LinkCard;
