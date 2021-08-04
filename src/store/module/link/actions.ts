import Link from 'src/models/Link';

export const linkConstants = {
  ADD_LINK: 'link/ADD_LINK' as const,
  SET_LINKS: 'link/SET_LINKS' as const,
  REMOVE_LINK: 'link/REMOVE_LINK' as const,
  UPDATE_LINK: 'link/UPDATE_LINK' as const,
  LINK_FETCH_SUCCESS: 'link/LINK_FETCH_SUCCESS' as const,
  LINK_FETCH_FAILURE: 'link/LINK_FETCH_FAILURE' as const,
  LINK_FETCH_REQUEST: 'link/LINK_FETCH_REQUEST' as const,
};

const linkActions = {
  setLinks: (links: Link[]) => ({
    type: linkConstants.SET_LINKS,
    payload: links,
  }),
  addLink: (link: Link) => ({
    type: linkConstants.ADD_LINK,
    payload: link,
  }),
  removeLink: (link: Link) => ({
    type: linkConstants.REMOVE_LINK,
    payload: link,
  }),
  updateLink: (link: Link) => ({
    type: linkConstants.UPDATE_LINK,
    payload: link,
  }),
  linkFetchSuccess: (links: Link[]) => ({
    type: linkConstants.LINK_FETCH_SUCCESS,
    payload: links,
  }),
  linkFetchRequest: () => ({
    type: linkConstants.LINK_FETCH_REQUEST,
  }),
  linkFetchFailure: (message: string) => ({
    type: linkConstants.LINK_FETCH_FAILURE,
    payload: message,
  }),
};

export type LinkActionType =
  | ReturnType<typeof linkActions.addLink>
  | ReturnType<typeof linkActions.removeLink>
  | ReturnType<typeof linkActions.updateLink>
  | ReturnType<typeof linkActions.setLinks>
  | ReturnType<typeof linkActions.linkFetchSuccess>
  | ReturnType<typeof linkActions.linkFetchRequest>
  | ReturnType<typeof linkActions.linkFetchFailure>

export default linkActions;
