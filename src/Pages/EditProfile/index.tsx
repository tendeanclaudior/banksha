import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../Components';

const EditProfile = () => {
  return (
    <SafeAreaView style={styles.page}>
      <Header title={'Edit Profile'} onBack={() => ''} />
      <View style={styles.container}>
        <View style={styles.contentView}>
          <TextInput title={'Username'} />
          <Gap height={16} width={0} />
          <TextInput title={'Full Name'} />
          <Gap height={16} width={0} />
          <TextInput title={'Email Address'} />
          <Gap height={16} width={0} />
          <TextInput title={'Password'} />
          <Gap height={30} width={0} />
          <Button title={'Update Now'} onPress={() => ''} />
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
