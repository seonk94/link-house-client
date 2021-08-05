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
          height={180}
          alt={link.title}
          src={link.image || NotFoundImage}
        />
      </div>
    )}
  >
    <Card.Meta title={link.title} description={link.description} />
  </Card>
);

export default LinkCard;
