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
        links: state.links.filter((link) => link._id !== action.payload._id),
      };
    }
    case linkConstants.UPDATE_LINK: {
      const findIndex = state.links.findIndex(
        (link) => link._id === action.payload._id,
      );
      if (findIndex === -1) return state;
      const newLinks = [...state.links];
      newLinks[findIndex] = action.payload;
      return {
        ...state,
        links: newLinks,
      };
    }
    case linkConstants.SET_LINKS: {
      return {
        ...state,
        links: action.payload,
      };
    }
    case linkConstants.FAIL_LINK: {
      return {
        ...state,
        message: action.payload,
      };
    }
    case linkConstants.FETCH_LINKS: {
      return state;
    }
    default: return state;
  }
}
export default linkReducer;
