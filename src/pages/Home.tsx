import {
  Col, Divider, Row,
} from 'antd';
import UrlInput from 'src/components/atoms/UrlInput';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'src/models/Link';
import LinkCard from 'src/components/atoms/LinkCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import linkActions from 'src/store/module/link/actions';
import SignInAlert from 'src/components/atoms/SignInAlert';

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

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value), []);

  const handleSearch = useCallback(() => {
    if (user) {
      dispatch(linkActions.postLink(search));
    } else {
      dispatch(linkActions.postLocalLink(search));
    }
    setSearch('');
  }, [user, linkActions, search]);

  const handleUpdateLink = useCallback((link: Link) => (partialLink: Partial<Link>) => {
    if (user) {
      dispatch(linkActions.patchLink({
        ...link,
        ...partialLink,
      }));
    } else {
      dispatch(linkActions.updateLink({
        ...link,
        ...partialLink,
      }));
    }
  }, [user, linkActions]);

  const handleDeleteLink = useCallback((link: Link) => {
    if (user) {
      dispatch(linkActions.deleteLink(link._id));
    } else {
      dispatch(linkActions.removeLink(link._id));
    }
  }, [user, linkActions]);

  const handleClickLink = useCallback((link: Link) => {
    window.open(link.url, '_blank');
  }, []);

  return (
    <>
      <Row justify="center">
        <Col xs={24} md={12} lg={10}>
          <UrlInput handleInput={handleInput} value={search} handleSearch={handleSearch} />
        </Col>
      </Row>
      <Divider />
      {
        user
          ? undefined
          : (
            <SignInAlert />
          )
      }
      <Row justify="start" gutter={[16, 16]}>
        {links.map((link) => (
          <Col key={link._id} xs={24} sm={24} md={12} lg={12} xl={8}>
            <LinkCard link={link} handleUpdate={handleUpdateLink(link)} handleDelete={handleDeleteLink} handleClick={handleClickLink} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Home;
