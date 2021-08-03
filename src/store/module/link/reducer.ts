import Link from 'src/models/Link';

const ADD_LINK = 'link/ADD_LINK' as const;
const SET_LINKS = 'link/SET_LINKS' as const;
const REMOVE_LINK = 'link/REMOVE_LINK' as const;
const UPDATE_LINK = 'link/UPDATE_LINK' as const;

export const setLinks = (links: Link[]) => ({
  type: SET_LINKS,
  payload: links,
});

export const addLink = (link: Link) => ({
  type: ADD_LINK,
  payload: link,
});

export const removeLink = (link: Link) => ({
  type: REMOVE_LINK,
  payload: link,
});

export const updateLink = (link: Link) => ({
  type: UPDATE_LINK,
  payload: link,
});

type Action =
  | ReturnType<typeof addLink>
  | ReturnType<typeof removeLink>
  | ReturnType<typeof updateLink>
  | ReturnType<typeof setLinks>;

type State = {
  links: Link[]
  message: string;
}

const initialState: State = {
  links: [],
  message: '',
};

function linkReducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case ADD_LINK: return {
      ...state,
      links: state.links.concat(action.payload),
    };
    case REMOVE_LINK: {
      return {
        ...state,
        links: state.links.filter((link) => link.id !== action.payload.id),
      };
    }
    case SET_LINKS: {
      return {
        ...state,
        links: action.payload,
      };
    }
    case UPDATE_LINK: {
      const findIndex = state.links.findIndex(
        (link) => link.id === action.payload.id,
      );
      if (findIndex === -1) return state;
      const newLinks = [...state.links];
      newLinks[findIndex] = action.payload;
      return {
        ...state,
        links: newLinks,
      };
    }
    default: return state;
  }
}
export default linkReducer;