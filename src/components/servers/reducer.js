import { FETCH_SERVERS_FAILED, FETCH_SERVERS_SUCCESS } from '../../constants/actions';

const initialState = {
  servers: [],
  isLoading: false,
}

export const serversReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_SERVERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        servers: action.payload
      }
    }
    case FETCH_SERVERS_FAILED: {
      return {
        ...state,
        isLoading: false
      }
    }
    default:
      return state
  }
}