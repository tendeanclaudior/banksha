import axios from 'axios';
import {API_URL} from '../../Service/config';
import {setLoading} from './global';
import {Alert} from 'react-native';

export const userService = dataToken => async dispatch => {
  try {
    dispatch(setLoading(false));
    const res = await axios.get(`${API_URL}/users`, {
      headers: {Authorization: `Bearer ${dataToken}`},
    });

    return res?.data;
  } catch (error) {
    dispatch(setLoading(false));
    Alert.alert('Something error plis reload the app');
    console.log('Error :', error);
  }
};
