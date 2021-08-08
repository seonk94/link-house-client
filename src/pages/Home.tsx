import { Col, Divider, Row } from 'antd';
import UrlInput from 'src/atoms/UrlInput';
import React, { useState, useEffect } from 'react';
import Link from 'src/models/Link';
import LinkCard from 'src/atoms/LinkCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import linkActions from 'src/store/module/link/actions';

const Home = () => {
  const [search, setSearch] = useState('');
  const links = useSelector((state: RootState) => state.link.links);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (links.length === 0 && user) {
      dispatch(linkActions.fetchLinks());
    }
  }, [user]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  const handleSearch = () => {
    if (user) {
      dispatch(linkActions.postLink(search));
    } else {
      dispatch(linkActions.postLocalLink(search));
    }
    setSearch('');
  };

  const handleUpdateLink = (link: Link) => (partialLink: Partial<Link>) => {
    dispatch(linkActions.patchLink({
      ...link,
      ...partialLink,
    }));
  };

  return (
    <>
      <Row justify="center">
        <Col xs={24} md={12} lg={10}>
          <UrlInput handleInput={handleInput} handleSearch={handleSearch} />
        </Col>
      </Row>
      <Divider />
      <Row justify="start" gutter={[16, 16]}>
        {links.map((link) => (
          <Col key={link._id} xs={24} md={12} lg={6}>
            <LinkCard link={link} handleUpdate={handleUpdateLink(link)} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Home;
