import React, {FC} from 'react';
import {Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Fonts, LogoDark} from '../../Assets';
import {Button, Gap, TextInput} from '../../Components';
import {registerService, setLoading} from '../../Redux/Action';
import {UseForm} from '../../Utils';

type Props = {
  navigation: {replace: Function};
};

const UploadPIN: FC<Props> = ({navigation}) => {
  const [form, setForm] = UseForm({
    pin: '',
  });
  const dispatch = useDispatch();
  const registerReducer = useSelector(state => state.registerReducer);

  const onSubmit = () => {
    const data = {
      ...form,
      ...registerReducer,
    };
    setForm('reset');
    dispatch(setLoading(true));
    dispatch(registerService(data, navigation));
  };

  const statement = () => {
    if (form.pin === '') {
      Alert.alert('Masukan PIN anda maksimal 6 digit number');
    } else {
      return onSubmit();
    }
  };

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View style={styles.logoView}>
          <LogoDark />
        </View>
        <Gap height={30} width={0} />
        <View>
          <Text style={styles.title}>Join Us to Unlock Your Growth</Text>
          <Gap height={30} width={0} />
          <View style={styles.formView}>
            <TextInput
              title={'Set PIN (6 digit number)'}
              value={form.pin}
              onChangeText={value => setForm('pin', value)}
            />
            <Gap height={30} width={0} />
            <Button title={'Continue'} onPress={() => statement()} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UploadPIN;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F6F8FB',
  },
  container: {
    flex: 1,
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
});
