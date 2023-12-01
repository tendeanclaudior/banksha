import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Fonts} from '../../../Assets';
import {Gap} from '../../Atoms';

const Loading = () => {
  return (
    <View style={styles.continer}>
      <ActivityIndicator size="large" color="#FFFFFF" />
      <Gap height={6} width={0} />
      <Text style={styles.title}>Loading....</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: 'rgba(20, 25, 63, 0.8)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.Poppins[600],
    color: '#FFFFFF',
  },
});
