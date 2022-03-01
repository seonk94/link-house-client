import { Col, Divider, Row, Tag } from 'antd';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LinkCard from 'src/components/atoms/LinkCard';
import SignInAlert from 'src/components/atoms/SignInAlert';
import UrlInput from 'src/components/atoms/UrlInput';
import RateModal from 'src/components/layout/RateModal';
import TagModal from 'src/components/layout/TagModal';
import Link from 'src/models/Link';
import { tagService } from 'src/services/tag';
import { RootState } from 'src/store';
import userActions from 'src/store/module/auth/actions';
import linkActions from 'src/store/module/link/actions';

const Home = () => {
  const [search, setSearch] = useState('');
  const [showRateModal, setShowRateModal] = useState(false);
  const [showTagModal, setShowTagModal] = useState(false);
  const [watchLink, setWatchLink] = useState<null | Link>(null);
  const links = useSelector((state: RootState) => state.link.links);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const userTags = useMemo(() => {
    return [
      ...links.reduce((acc, cur) => {
        cur.tags.forEach((tag) => acc.add(tag));
        return acc;
      }, new Set<string>()),
    ];
  }, [links]);

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
  }, [user, dispatch, linkActions, search]);

  const handleUpdateLink = useCallback(
    (link: Link) => (partialLink: Partial<Link>) => {
      if (user) {
        dispatch(
          linkActions.patchLink({
            ...link,
            ...partialLink,
          }),
        );
      } else {
        dispatch(
          linkActions.updateLink({
            ...link,
            ...partialLink,
          }),
        );
      }
    },
    [user, dispatch, linkActions],
  );

  const handleDeleteLink = useCallback(
    (link: Link) => {
      if (user) {
        dispatch(linkActions.deleteLink(link._id));
      } else {
        dispatch(linkActions.removeLink(link._id));
      }
    },
    [user, dispatch, linkActions],
  );

  const handleClickLink = useCallback(
    (link: Link) => {
      window.open(link.url, '_blank');
      if (user) {
        const newLink = new Link({
          ...link,
          watchAt: new Date().toISOString(),
        });
        if (!link.grade) {
          handleShowRateModal(newLink);
        }

        dispatch(linkActions.patchLink(newLink));
      }
    },
    [user, dispatch, linkActions, setShowRateModal],
  );

  const handleShowRateModal = useCallback(
    (link: Link) => {
      setWatchLink(link);
      setShowRateModal(true);
    },
    [setWatchLink, setShowRateModal],
  );

  const handleCloseRateModal = useCallback(
    (grade?: number) => {
      if (watchLink && grade && user) {
        dispatch(
          linkActions.patchLink({
            ...watchLink,
            grade,
          }),
        );
        setWatchLink(null);
      }
      setShowRateModal(false);
    },
    [watchLink, dispatch, setWatchLink, user, setShowRateModal, linkActions],
  );

  const handleShowTagModal = useCallback(
    (link: Link) => {
      console.log('link', link);
      setWatchLink(link);
      setShowTagModal(true);
    },
    [setWatchLink, setShowTagModal],
  );

  const handleCloseTagModal = useCallback(
    (obj?: { tags: string[]; deleteTags: string[]; registTags: string[] }) => {
      if (obj && watchLink && user) {
        dispatch(
          linkActions.patchLink({
            ...watchLink,
            tags: obj.tags,
          }),
        );
        setWatchLink(null);
      }
      setShowTagModal(false);
    },
    [watchLink, dispatch, setWatchLink, user, setShowTagModal, linkActions],
  );

  return (
    <>
      <Row justify="center">
        <Col xs={24} md={12} lg={10}>
          <UrlInput handleInput={handleInput} value={search} handleSearch={handleSearch} />
        </Col>
      </Row>
      <Divider />
      {user ? undefined : <SignInAlert />}
      <Row justify="start" gutter={[16, 16]}>
        {links.map((link) => (
          <Col key={link._id} xs={24} sm={24} md={12} lg={12} xl={8}>
            <LinkCard
              link={link}
              handleUpdate={handleUpdateLink(link)}
              handleShowRateModal={handleShowRateModal}
              handleShowTagModal={handleShowTagModal}
              handleDelete={handleDeleteLink}
              handleClick={handleClickLink}
            />
          </Col>
        ))}
      </Row>
      {showRateModal && <RateModal show={showRateModal} handleClose={handleCloseRateModal} />}
      {showTagModal && watchLink && (
        <TagModal show={showTagModal} initTags={watchLink.tags} handleClose={handleCloseTagModal} />
      )}
    </>
  );
};
export default Home;
