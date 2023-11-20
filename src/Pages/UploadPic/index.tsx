import React, {FC} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Fonts, IconUpload, LogoDark} from '../../Assets';
import {Button, Gap, TextInput} from '../../Components';

type Props = {
  navigation: {replace: Function};
};

const UploadPic: FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View style={styles.logoView}>
          <LogoDark />
        </View>
        <View>
          <Text style={styles.title}>Join Us to Unlock Your Growth</Text>
          <Gap height={30} width={0} />
          <View style={styles.formView}>
            <View style={styles.UploadContent}>
              <TouchableOpacity activeOpacity={0.5} style={styles.UpoloadView}>
                <IconUpload />
              </TouchableOpacity>
              <Gap height={16} width={0} />
              <Text style={styles.titleName}>Claudio Tendean</Text>
            </View>
            <Gap height={30} width={0} />
            <TextInput title={'Set PIN (6 digit number)'} />
            <Gap height={30} width={0} />
            <Button title={'Continue'} onPress={() => navigation.replace('')} />
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
