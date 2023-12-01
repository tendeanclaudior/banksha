import React, {FC, useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {Fonts, IconUpload, LogoDark} from '../../Assets';
import {Button, Gap} from '../../Components';

type Props = {
  navigation: {navigate: Function};
};

const UploadPic: FC<Props> = ({navigation}) => {
  const [profile_picture, setProfile_Picture] = useState('');
  const dispatch = useDispatch();
  const {name} = useSelector(state => state.registerReducer);

  const onSubmit = () => {
    dispatch({type: 'SET_REGISTER_PICTURE', value: {profile_picture}});
    navigation.navigate('UploadPIN');
  };

  const addPhoto = async () => {
    try {
      const options = {
        includeBase64: true,
        maxWidth: 500,
        maxHeight: 500,
        quality: 0.6,
      };

      const res = await launchImageLibrary(options);
      const data = res.assets;
      if (data && data.length) {
        data.map(item => {
          setProfile_Picture(`data:${item.type};base64,${item.base64}`);
        });
      }
      if (res.didCancel || res.errorMessage) {
        Alert.alert('Anda Tidak Memilih Foto');
      }
    } catch (error) {
      console.log('Error AddPhoto', error);
    }
  };

  const statement = () => {
    if (profile_picture === '') {
      Alert.alert('Masukan Photo anda');
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
            <View style={styles.UploadContent}>
              {profile_picture ? (
                <Image
                  source={{uri: profile_picture}}
                  style={styles.UpoloadView}
                />
              ) : (
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.UpoloadView}
                  onPress={() => addPhoto()}>
                  <IconUpload />
                </TouchableOpacity>
              )}
              <Gap height={16} width={0} />
              <Text style={styles.titleName}>{name}</Text>
            </View>
            <Gap height={30} width={0} />
            <Button title={'Continue'} onPress={() => statement()} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UploadPic;

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
  UploadContent: {
    alignItems: 'center',
  },
  UpoloadView: {
    backgroundColor: '#F1F1F9',
    width: 120,
    height: 120,
    borderRadius: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleName: {
    fontSize: 18,
    fontFamily: Fonts.Poppins[500],
    color: '#14193F',
    textTransform: 'capitalize',
  },
});
