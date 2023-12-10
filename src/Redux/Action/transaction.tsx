import axios from 'axios';
import {getData} from '../../Utils/LocalStorage';
import {API_URL} from '../../Service/config';

export const transactionService = () => (dispatch: any) => {
  getData('token').then(token => {
    axios
      .get(`${API_URL}/transactions`, {
        headers: {Authorization: `Bearer ${token.token}`},
      })
      .then(res => {
        dispatch({type: 'SET_ALL_TRANSACTION', value: {data: res.data.data}});
      })
      .catch(err => {
        console.log('DATA ERR TRANSACTION', err);
      });
  });
};
