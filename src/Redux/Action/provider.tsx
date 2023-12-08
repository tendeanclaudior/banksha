import axios from 'axios';
import {getData} from '../../Utils/LocalStorage';
import {API_URL} from '../../Service/config';

export const providerService = () => dispatch => {
  getData('token').then(token => {
    axios
      .get(`${API_URL}/operator_cards`, {
        headers: {Authorization: `Bearer ${token.token}`},
      })
      .then(res => {
        dispatch({type: 'SET_ALL_PROVIDER', value: {providers: res.data.data}});
      })
      .catch(error => {
        console.log('Err', error.response);
      });
  });
};
