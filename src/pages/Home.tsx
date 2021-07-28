import { Col, Divider, Row } from 'antd';
import UrlInput from 'src/atoms/UrlInput';
import React from 'react';
import Link from 'src/models/Link';
import LinkCard from 'src/atoms/LinkCard';

const dummyLinks = [
  new Link({ id: '0', url: 'https://naver.com', title: 'title' }),
  new Link({ id: '1', url: 'https://naver.com', title: 'title' }),
  new Link({ id: '2', url: 'https://naver.com', title: 'title' }),
];
const Home = () => (
  <section>
    <Row justify="center">
      <Col xs={24} md={12} lg={10}>
        <UrlInput />
      </Col>
    </Row>
    <Divider />
    <Row justify="space-around">
      {dummyLinks.map((link) => <Col key={link.id} xs={12} md={6}><LinkCard link={link} /></Col>)}
    </Row>
  </section>
);
export default Home;
