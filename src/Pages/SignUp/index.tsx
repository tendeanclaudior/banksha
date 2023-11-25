import React, {FC} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Fonts, LogoDark} from '../../Assets';
import {Button, Gap, TextInput} from '../../Components';

type Props = {
  navigation: {goBack: Function; navigate: Function};
};

const SignUp: FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.logoView}>
              <LogoDark />
            </View>
            <Gap height={50} width={0} />
            <View>
              <Text style={styles.title}>Join Us to Unlock Your Growth</Text>
              <Gap height={30} width={0} />
              <View style={styles.formView}>
                <TextInput title={'Full Name'} />
                <Gap height={16} width={0} />
                <TextInput title={'Email Address'} />
                <Gap height={16} width={0} />
                <TextInput title={'Password'} />
                <Gap height={30} width={0} />
                <Button
                  title={'Continue'}
                  onPress={() => navigation.navigate('UploadPic')}
                />
              </View>
              <Gap height={50} width={0} />
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.buttonCreateAcc}
                onPress={() => navigation.goBack('SignIn')}>
                <Text style={styles.createAccTitle}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F6F8FB',
  },
  container: {
    flex: 2,
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
