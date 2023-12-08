import axios from 'axios';
import {Alert} from 'react-native';
import {API_URL} from '../../Service/config';
import {clearData, storeData} from '../../Utils/LocalStorage';
import {setLoading} from './global';

export const registerService = (dataRegister, navigation) => dispatch => {
  axios
    .post(`${API_URL}/register`, dataRegister)
    .then(res => {
      dispatch(setLoading(false));

      const data = {
        name: res.data.name,
        profile_picture: res.data.profile_picture,
        id: res.data.id,
        pin: res.data.pin,
      };

      const token = {
        token_type: res.data.token_type,
        token: res.data.token,
      };

      axios
        .get(`${API_URL}/users`, {
          headers: {Authorization: `${token.token_type} ${token.token}`},
        })
        .then(resp => {
          dispatch(setLoading(false));
          const user = resp?.data;

          storeData('user', user);
          storeData('profileUser', data);
          storeData('token', token);
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        })
        .catch(error => {
          dispatch(setLoading(false));
          console.log('Token Error :', error);
        });
      dispatch({type: 'SET_CLEAR_REGISTER'});
    })
    .catch(err => {
      dispatch(setLoading(false));

      if (err?.response?.data?.errors?.pin) {
        Alert.alert('Error:', err?.response?.data?.errors?.pin[0], [
          {text: 'Tutup'},
        ]);
      } else if (err?.response?.data?.errors?.email) {
        Alert.alert('Error:', err?.response?.data?.errors?.email[0], [
          {text: 'Tutup'},
        ]);
      } else if (err?.response?.data?.errors?.password) {
        Alert.alert('Error:', err?.response?.data?.errors?.password[0], [
          {text: 'Tutup'},
        ]);
      } else {
        Alert.alert('Error:', err?.response?.data?.message, [{text: 'Tutup'}]);
      }
    });
};

export const signInService = (formRegister, navigation) => dispatch => {
  axios
    .post(`${API_URL}/login`, formRegister)
    .then(res => {
      dispatch(setLoading(false));

      const data = {
        name: res.data.name,
        profile_picture: res.data.profile_picture,
        id: res.data.id,
        pin: res.data.pin,
      };

      const token = {
        token_type: res.data.token_type,
        token: res.data.token,
      };

      axios
        .get(`${API_URL}/users`, {
          headers: {Authorization: `${token.token_type} ${token.token}`},
        })
        .then(resp => {
          const user = resp?.data;
          dispatch(setLoading(false));

          storeData('profileUser', data);
          storeData('token', token);
          storeData('user', user);
          navigation.reset({index: 0, routes: [{name: 'SecurityCode'}]});
        })
        .catch(error => {
          dispatch(setLoading(false));
          console.log('Token Error :', error);
        });
    })
    .catch(err => {
      dispatch(setLoading(false));
      if (err?.response?.data?.errors?.password) {
        Alert.alert('Error:', err?.response?.data?.errors?.password[0], [
          {text: 'Tutup'},
        ]);
      } else {
        Alert.alert('Error:', err?.response?.data?.message, [{text: 'Tutup'}]);
      }
    });
};

export const logOutService =
  (tokenType, token, navigation) => async dispatch => {
    try {
      const res = await axios.post(
        `${API_URL}/logout`,
        {},
        {headers: {Authorization: `${tokenType} ${token}`}},
      );
      dispatch(setLoading(false));

      clearData(['profileUser', 'token', 'user']);
      navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
      return res.data;
    } catch (err) {
      dispatch(setLoading(false));
      Alert.alert('Logout Error', 'An error occurred while logging out.');
    }
  };
