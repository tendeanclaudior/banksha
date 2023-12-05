import {API_URL} from '../../Service/config';
import axios from 'axios';
import {getData} from '../../Utils/LocalStorage';
import {Alert} from 'react-native';

export const userService = users => dispatch => {
  getData('token').then(token => {
    axios
      .get(`${API_URL}/users`, {
        headers: {Authorization: `Bearer ${token.token}`},
      })
      .then(res => {
        users(res.data);
      })
      .catch(err => {
        Alert.alert('Error', err.response, [{text: 'Tutup'}]);
      });
  });
};
