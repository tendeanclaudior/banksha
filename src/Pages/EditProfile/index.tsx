import React, {FC, useCallback, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../Components';
import {UseForm} from '../../Utils';
import {getData} from '../../Utils/LocalStorage';
import axios from 'axios';
import {API_URL} from '../../Service/config';
import {useDispatch, useSelector} from 'react-redux';
import {userService} from '../../Redux/Action';

type Props = {
  navigation: {goBack: Function; reset: Function};
};

const EditProfile: FC<Props> = ({navigation}) => {
  const {user} = useSelector(state => state.userReducer);
  // const [user, setUser] = useState();
  // const dispatch = useDispatch();
  const [form, setForm] = UseForm({
    username: user?.username,
    name: user?.name,
    email: user?.email,
  });
  console.log('USER', user);

  // useEffect(() => {
  //   dispatch(userService(setUser));
  // }, []);

  const onSubmit = useCallback(async () => {
    try {
      const token = await getData('token');
      await axios
        .put(`${API_URL}/users`, form, {
          headers: {Authorization: `Bearer ${token.token}`},
        })
        .then(res => {
          console.log('RESPONS UPDATE', res);
          // const resp = userService();
          // dispatch({type: 'SET_USER', value: {user: resp}});
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        });
    } catch (err) {
      console.log('ERR UPDATE', err.response);
    }
  }, [user]);

  return (
    <SafeAreaView style={styles.page}>
      <Header title={'Edit Profile'} onBack={() => navigation.goBack('')} />
      <View style={styles.container}>
        <View style={styles.contentView}>
          <TextInput
            title={'Username'}
            value={form.username}
            onChangeText={value => setForm('username', value)}
          />
          <Gap height={16} width={0} />
          <TextInput
            title={'Full Name'}
            value={form.name}
            onChangeText={value => setForm('name', value)}
          />
          <Gap height={16} width={0} />
          <TextInput
            // editable={false}
            title={'Email Address'}
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={30} width={0} />
          <Button title={'Update Now'} onPress={() => onSubmit()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F6F8FB',
  },
  container: {
    paddingHorizontal: 24,
  },
  contentView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 22,
    paddingVertical: 22,
  },
});
