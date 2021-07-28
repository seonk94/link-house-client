import { Card } from 'antd';
import React from 'react';
import Link from 'src/models/Link';

const LinkCard = ({ link }: { link: Link }) => (<Card title={link.title} />);

export default LinkCard;
