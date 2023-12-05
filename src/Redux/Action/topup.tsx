import axios from 'axios';
import {Alert, Linking} from 'react-native';
import {API_URL} from '../../Service/config';
import {getData} from '../../Utils/LocalStorage';

export const topUpService = (data, navigation) => dispatch => {
  getData('token').then(resp => {
    const token = resp.token;
    axios
      .post(`${API_URL}/top_ups`, data, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(async res => {
        await Linking.openURL(res.data.redirect_url);
        navigation.replace('TopUpSuccess', {nameScreen: 'top_up'});
      })
      .catch(err => {
        Alert.alert('Error', err.response.data.errors.amount[0], [
          {text: 'Tutup'},
        ]);
      });
  });
};

export const transferService = (data, navigation) => dispatch => {
  getData('token').then(token => {
    axios
      .post(`${API_URL}/transfers`, data, {
        headers: {Authorization: `Bearer ${token.token}`},
      })
      .then(() => {
        navigation.replace('TopUpSuccess', {nameScreen: 'transfer'});
      })
      .catch(err => {
        Alert.alert('Error', err.response.data.message, [{text: 'Tutup'}]);
      });
  });
};
