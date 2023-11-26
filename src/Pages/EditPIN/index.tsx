import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../Components';

const EditPIN = () => {
  return (
    <SafeAreaView style={styles.page}>
      <Header title={'Edit PIN'} onBack={() => ''} />
      <View style={styles.container}>
        <View style={styles.contentView}>
          <TextInput title={'Old PIN'} />
          <Gap height={16} width={0} />
          <TextInput title={'New PIN'} />
          <Gap height={30} width={0} />
          <Button title={'Update Now'} onPress={() => ''} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditPIN;

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
    paddingVertical: 22,
    paddingHorizontal: 22,
  },
});
