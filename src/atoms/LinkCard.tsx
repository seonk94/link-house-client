import { Card, Image, Rate } from 'antd';
import React from 'react';
import Link from 'src/models/Link';
import NotFoundImage from 'src/assets/images/NotFound.png';

interface Props {
  link: Link;
  handleUpdate: (partialLink: Partial<Link>) => void;
}
const LinkCard = ({ link, handleUpdate }: Props) => (
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
        paddingBottom: '4px',
      }}
    />
    <div
      className="ant-card-meta-description"
      style={{
        maxHeight: '44px',
        minHeight: '44px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        wordBreak: 'break-word',
        display: '-webkit-box',
        paddingBottom: '4px',
      }}
    >
      {link.description}
    </div>
    <div>
      <Rate allowHalf value={link.grade} onChange={(value) => handleUpdate({ grade: value })} />
    </div>
  </Card>
);

export default LinkCard;
