import Link from 'src/models/Link';

export const linkConstants = {
  ADD_LINK: 'link/ADD_LINK' as const,
  SET_LINKS: 'link/SET_LINKS' as const,
  REMOVE_LINK: 'link/REMOVE_LINK' as const,
  UPDATE_LINK: 'link/UPDATE_LINK' as const,
  FAIL_LINK: 'link/FAIL_LINK' as const,
  GET_LINKS: 'link/GET_LINKS' as const,
  FETCH_LINKS: 'link/FETCH_LINKS' as const,
  PATCH_LINK: 'link/PATCH_LINK' as const,
  POST_LINK: 'link/POST_LINK' as const,
  DELETE_LINK: 'link/DELETE_LINK' as const,
  POST_LOCAL_LINK: 'link/POST_LOCAL_LINK' as const,
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
  removeLink: (id: string) => ({
    type: linkConstants.REMOVE_LINK,
    payload: id,
  }),
  updateLink: (link: Link) => ({
    type: linkConstants.UPDATE_LINK,
    payload: link,
  }),
  patchLink: (link: Link) => ({
    type: linkConstants.PATCH_LINK,
    payload: link,
  }),
  failLink: (message: unknown) => ({
    type: linkConstants.FAIL_LINK,
    payload: message,
  }),
  fetchLinks: () => ({
    type: linkConstants.FETCH_LINKS,
  }),
  postLink: (uri: string) => ({
    type: linkConstants.POST_LINK,
    payload: uri,
  }),
  postLocalLink: (uri: string) => ({
    type: linkConstants.POST_LOCAL_LINK,
    payload: uri,
  }),
  deleteLink: (id: string) => ({
    type: linkConstants.DELETE_LINK,
    payload: id,
  }),
};

export type LinkActionType =
  | ReturnType<typeof linkActions.addLink>
  | ReturnType<typeof linkActions.removeLink>
  | ReturnType<typeof linkActions.updateLink>
  | ReturnType<typeof linkActions.setLinks>
  | ReturnType<typeof linkActions.fetchLinks>
  | ReturnType<typeof linkActions.failLink>
  | ReturnType<typeof linkActions.postLink>
  | ReturnType<typeof linkActions.patchLink>
  | ReturnType<typeof linkActions.postLocalLink>
  | ReturnType<typeof linkActions.deleteLink>

export default linkActions;
