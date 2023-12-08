import axios from 'axios';
import {Alert, Linking} from 'react-native';
import {API_URL} from '../../Service/config';
import {getData} from '../../Utils/LocalStorage';
import {setLoading} from './global';

export const topUpService = (data: any, navigation: any) => (dispatch: any) => {
  getData('token').then(resp => {
    const token = resp.token;
    axios
      .post(`${API_URL}/top_ups`, data, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(async res => {
        dispatch(setLoading(false));
        await Linking.openURL(res.data.redirect_url);
        navigation.replace('TopUpSuccess', {nameScreen: 'top_up'});
      })
      .catch(err => {
        dispatch(setLoading(false));
        Alert.alert('Error', err.response.data.errors.amount[0], [
          {text: 'Tutup'},
        ]);
      });
  });
};

export const transferService =
  (data: any, navigation: any) => (dispatch: any) => {
    getData('token').then(token => {
      axios
        .post(`${API_URL}/transfers`, data, {
          headers: {Authorization: `Bearer ${token.token}`},
        })
        .then(() => {
          dispatch(setLoading(false));
          navigation.replace('TopUpSuccess', {nameScreen: 'transfer'});
        })
        .catch(err => {
          dispatch(setLoading(false));
          Alert.alert('Error', err.response.data.message, [{text: 'Tutup'}]);
        });
    });
  };

export const paketDataService =
  (data: any, navigation: any) => (dispatch: any) => {
    getData('token').then(token => {
      axios
        .post(`${API_URL}/data_plans`, data, {
          headers: {Authorization: `Bearer ${token.token}`},
        })
        .then(() => {
          dispatch(setLoading(false));
          navigation.replace('TopUpSuccess', {
            nameScreen: 'paket_data',
          });
        })
        .catch(error => {
          dispatch(setLoading(false));
          Alert.alert('Error', error.response.data.message, [{text: 'Tutup'}]);
        });
    });
  };
