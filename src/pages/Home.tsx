import { Col, Divider, Row } from 'antd';
import UrlInput from 'src/atoms/UrlInput';
import React, { useState, useEffect } from 'react';
import Link from 'src/models/Link';
import LinkCard from 'src/atoms/LinkCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import linkActions from 'src/store/module/link/actions';

const dummyLinks = [
  new Link({
    id: '61029964e5b2902c44577def',
    title: 'YouTube',
    description: 'YouTube에서 마음에 드는 동영상과 음악을 감상하고, 직접 만든 콘텐츠를 업로드하여 친구, 가족뿐 아니라 전 세계 사람들과 콘텐츠를 공유할 수 있습니다.',
    image: 'https://www.youtube.com/img/desktop/yt_1200.png',
    url: 'https://www.youtube.com',
  }),
  new Link({
    id: '610299dde5b2902c44577df1',
    title: '네이버',
    description: '네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요',
    image: 'https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png',
    date: '2021-07-29T16:23:00.000Z',
    url: 'https://www.naver.com',
  }),
  new Link({
    id: '610299f5e5b2902c44577df3',
    title: 'Facebook - 로그인 또는 가입',
    description: 'Facebook에 로그인하세요. 친구, 가족, 지인들과 함께 하는 즐거운 Facebook 생활이 시작됩니다.',
    image: 'https://www.facebook.com/images/fb_icon_325x325.png',
    url: 'https://www.facebook.com',
  }),
];
const Home = () => {
  const [search, setSearch] = useState('');
  const links = useSelector((state: RootState) => state.link.links);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(linkActions.linkFetchRequest());
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  const handleSearch = async () => {
    // post url
  };

  return (
    <>
      <Row justify="center">
        <Col xs={24} md={12} lg={10}>
          <UrlInput handleInput={handleInput} handleSearch={handleSearch} />
        </Col>
      </Row>
      <Divider />
      <Row justify="space-around">
        {links.map((link) => (
          <Col key={link.id} xs={24} md={12} lg={6}>
            <LinkCard link={link} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Home;
