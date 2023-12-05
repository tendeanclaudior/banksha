import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Fonts} from '../../../Assets';

const NetWork = () => {
  return (
    <SafeAreaView style={styles.page}>
      <Text style={styles.title}>
        Tidak ada koneksi internet, mohon periksa koneksi internet anda
      </Text>
    </SafeAreaView>
  );
};

export default NetWork;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.Poppins[600],
    color: '#5142E6',
    textAlign: 'center',
    maxWidth: 250,
  },
});
