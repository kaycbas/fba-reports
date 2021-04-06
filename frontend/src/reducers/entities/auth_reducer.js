import { RECEIVE_AMAZON_AUTH } from '../../actions/auth_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_AMAZON_AUTH:
      return {
          ...state,
          data: action.payload.data
      }
    default:
      return state;
  }
};
