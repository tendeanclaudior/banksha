import axios from 'axios';
import {getData} from '../../Utils/LocalStorage';
import {API_URL} from '../../Service/config';

export const paymentService = () => dispatch => {
  getData('token').then(token => {
    axios
      .get(`${API_URL}/payment_methods`, {
        headers: {Authorization: `Bearer ${token.token}`},
      })
      .then(res => {
        dispatch({type: 'SET_ALL_BANK', value: {data: res.data}});
      })
      .catch(err => {
        console.log('PAYMENT ERR', err.response);
      });
  });
};
