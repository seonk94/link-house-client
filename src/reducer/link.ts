const ADD_LINK = 'link/ADD_LINK' as const;

type Link = {
  url: string;
  grade: number;
}

export const addLink = (link: Link) => ({
  type: ADD_LINK,
  payload: link,
});

type Action = ReturnType<typeof addLink>

type State = {
  links: Link[]
}

const initialState: State = {
  links: [],
};
function link(state: State = initialState, action: Action): State {
  switch (action.type) {
    case ADD_LINK: return {
      ...state,
      links: state.links.concat(action.payload),
    };
    default: return state;
  }
}
export default link;
