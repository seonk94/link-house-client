import Link from 'src/models/Link';
import { LinkActionType, linkConstants } from './actions';

type State = {
  links: Link[]
  message: string;
}

const initialState: State = {
  links: [],
  message: '',
};

function linkReducer(state: State = initialState, action: LinkActionType): State {
  switch (action.type) {
    case linkConstants.ADD_LINK: return {
      ...state,
      links: state.links.concat(action.payload),
    };
    case linkConstants.REMOVE_LINK: {
      return {
        ...state,
        links: state.links.filter((link) => link.id !== action.payload.id),
      };
    }
    case linkConstants.UPDATE_LINK: {
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
    case linkConstants.SET_LINKS:
    case linkConstants.LINK_FETCH_SUCCESS: {
      return {
        ...state,
        links: action.payload,
      };
    }
    case linkConstants.LINK_FETCH_FAILURE: {
      return {
        ...state,
        message: action.payload,
      };
    }
    case linkConstants.LINK_FETCH_REQUEST: {
      return state;
    }
    default: return state;
  }
}
export default linkReducer;
