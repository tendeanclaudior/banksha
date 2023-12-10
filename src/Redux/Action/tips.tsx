import axios from 'axios';
import {getData} from '../../Utils/LocalStorage';
import {API_URL} from '../../Service/config';

export const tipsService = () => (dispatch: any) => {
  getData('token').then(token => {
    axios
      .get(`${API_URL}/tips`, {
        headers: {Authorization: `Bearer ${token.token}`},
      })
      .then(res => {
        dispatch({type: 'SET_ALL_TIPS', value: {tips: res.data.data}});
      })
      .catch(err => {
        console.log('Err Tips', err);
      });
  });
};
