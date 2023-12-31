import React, {FC} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {Fonts, LogoDark} from '../../Assets';
import {Button, Gap, TextInput} from '../../Components';
import {setLoading, signInService} from '../../Redux/Action';
import {UseForm} from '../../Utils';

type Props = {
  navigation: {navigate: Function; reset: Function};
};

const SignIn: FC<Props> = ({navigation}) => {
  const [form, setForm] = UseForm({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(setLoading(true));
    setForm('reset');
    dispatch(signInService(form, navigation));
  };

  const onStatment = () => {
    if (form.email === '') {
      return Alert.alert('Error', 'Masukan Email yang sudah anda daftarkan', [
        {text: 'TUTUP'},
      ]);
    } else if (form.password === '') {
      return Alert.alert(
        'Error',
        'Masukan Password yang sudah anda daftarkan',
        [{text: 'TUTUP'}],
      );
    } else {
      return onSubmit();
    }
  };

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.logoView}>
            <LogoDark />
          </View>
          <Gap height={25} width={0} />
          <View>
            <Text style={styles.title}>Sign In & Grow Your Finance</Text>
            <Gap height={30} width={0} />
            <View style={styles.formView}>
              <TextInput
                title={'Email Address'}
                value={form.email}
                onChangeText={value => setForm('email', value)}
              />
              <Gap height={16} width={0} />
              <TextInput
                title={'Password'}
                value={form.password}
                onChangeText={value => setForm('password', value)}
                secureTextEntry={true}
              />
              <Gap height={8} width={0} />
              <Text style={styles.titleForgot}>Forgot Password</Text>
              <Gap height={30} width={0} />
              <Button title={'Sign In'} onPress={() => onStatment()} />
            </View>
            <Gap height={50} width={0} />
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.buttonCreateAcc}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.createAccTitle}>Create New Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F6F8FB',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 24 * 2,
  },
  logoView: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.Poppins[600],
    color: '#14193F',
    maxWidth: 200,
  },
  formView: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 20,
    paddingHorizontal: 22,
    paddingVertical: 22,
  },
  titleForgot: {
    fontSize: 14,
    fontFamily: Fonts.Poppins[400],
    color: '#53C1F9',
    textAlign: 'right',
  },
  buttonCreateAcc: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createAccTitle: {
    fontSize: 15,
    fontFamily: Fonts.Poppins[400],
    color: '#696B76',
    textAlign: 'center',
  },
});
