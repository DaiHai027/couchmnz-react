import {FULFILLED, PENDING, REJECTED, FETCH_GEN_AWARDS_LIST, CLEAR_GEN_AWARDS_LIST} from '../constants/ActionTypes';

const initialState = {data: [], status: null};

export default function awardsList(state = initialState, action) {
  switch (action.type) {
    case FETCH_GEN_AWARDS_LIST + FULFILLED: {
      if (action.payload.data.responseCode > 0) {
        return Object.assign({}, state, {data: [], status: REJECTED});
      }
      return Object.assign({}, state, {data: action.payload.data.payload, status: FULFILLED});
    }
    case FETCH_GEN_AWARDS_LIST + PENDING: {
      return {data: [], status: PENDING};
    }
    case FETCH_GEN_AWARDS_LIST + REJECTED: {
      return {data: [], status: REJECTED};
    }
    case CLEAR_GEN_AWARDS_LIST:
      return initialState;
    default:
      return state;
  }
}
