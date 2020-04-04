import { SEND_MESSAGE } from '../actions/actionTypes';

const initialState = {
  messages: [],
};

// eslint-disable-next-line import/prefer-default-export
export const chat = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    default:
      return state;
  }
};
