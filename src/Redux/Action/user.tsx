import {API_URL} from '../../Service/config';
import axios from 'axios';
import {getData} from '../../Utils/LocalStorage';
import {Alert} from 'react-native';
import {setLoading} from './global';

export const userService = (users: any) => (dispatch: any) => {
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

export const transferToUserService =
  (searching: any, user: any, users: any) => (dispatch: any) => {
    getData('token').then(resp => {
      const token = resp;
      axios
        .get(`${API_URL}/users/${searching}`, {
          headers: {Authorization: `Bearer ${token.token}`},
        })
        .then(res => {
          user(res.data);
          dispatch(setLoading(false));
        })
        .catch(err => {
          console.log('ERR SEND', err.response);
          Alert.alert(err.response);
          users([]);
          dispatch(setLoading(false));
        });
    });
  };

export const historyTransferService = (user: any) => (dispatch: any) => {
  getData('token').then(token => {
    axios
      .get(`${API_URL}/transfer_histories`, {
        headers: {Authorization: `Bearer ${token.token}`},
      })
      .then(res => {
        user(res.data.data);
        dispatch(setLoading(false));
      })
      .catch(err => {
        console.log('ERR SEND', err.response);
        Alert.alert('Error', err.response, [{text: 'TUTUP'}]);
        dispatch(setLoading(false));
      });
  });
};
