import axios from 'axios';
import { baseUrl } from '../../api/baseUrl';
import Cookies from 'js-cookie'
import { FETCH_SERVERS_FAILED, FETCH_SERVERS_SUCCESS } from '../../constants/actions';

export const getServers = () => (dispatch) => {
  axios.get(`${baseUrl.fetchUrl}`, {
    headers: {
      'Authorization': `Bearer ${Cookies.get('token')}`
    }
  })
    .then(({data}) => {
      dispatch({ type: FETCH_SERVERS_SUCCESS, payload: data})
    })
    .catch(error => dispatch({ type: FETCH_SERVERS_FAILED, payload: error.response.status}));
}