import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Fonts} from '../../Assets';

const Statistic = () => {
  return (
    <SafeAreaView style={styles.page}>
      <Text style={styles.title}>Mohon Maaf Halaman Ini Belum Tersedia</Text>
    </SafeAreaView>
  );
};

export default Statistic;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F6F8FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.Poppins[700],
    color: '#14193F',
    textAlign: 'center',
  },
});
