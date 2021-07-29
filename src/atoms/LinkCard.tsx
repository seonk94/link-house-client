import { Card } from 'antd';
import React from 'react';
import Link from 'src/models/Link';
import NotFoundImage from 'src/assets/images/NotFound.png';

const LinkCard = ({ link }: { link: Link }) => (
  <Card
    title={link.url}
    cover={
      <img alt={link.title} src={link.image || NotFoundImage} />
    }
  >
    <Card.Meta title={link.title} description={link.description} />
  </Card>
);

export default LinkCard;
