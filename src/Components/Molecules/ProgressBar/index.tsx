import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fonts} from '../../../Assets';
import {Gap} from '../../Atoms';

const ProgresBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <Text style={styles.levelTitle}>Level 1</Text>
        <Text style={styles.persenTitle}>
          55% <Text style={styles.amountTitle}>of IDR20.0000</Text>
        </Text>
      </View>

      <Gap height={10} width={0} />

      <View style={styles.progresOff}>
        <View style={styles.progresOn} />
      </View>
    </View>
  );
};

export default ProgresBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 22,
    paddingVertical: 22,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  levelTitle: {
    fontSize: 14,
    fontFamily: Fonts.Poppins[500],
    color: '#14193F',
  },
  persenTitle: {
    fontSize: 14,
    fontFamily: Fonts.Poppins[600],
    color: '#22B07D',
  },
  amountTitle: {
    fontSize: 14,
    fontFamily: Fonts.Poppins[600],
    color: '#14193F',
  },
  progresOff: {
    backgroundColor: '#F6F6F6',
    width: '100%',
    height: 6,
    borderRadius: 55,
    overflow: 'hidden',
  },
  progresOn: {
    backgroundColor: '#22B07D',
    width: '55%',
    height: 6,
    borderRadius: 55,
    position: 'absolute',
  },
});
