import React, {useEffect, useState} from 'react';
import {Animated, Easing, StyleSheet, Text, View} from 'react-native';
import {Fonts} from '../../../Assets';
import {Gap} from '../../Atoms';

const ProgresBar = () => {
  const formatRupiah = (amount: any) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };
  const [progress] = useState(new Animated.Value(0));
  const [level, setLevel] = useState(2); // Sesuaikan level berdasarkan logika aplikasi Anda
  const [percentage, setPercentage] = useState(150); // Sesuaikan persentase berdasarkan data Anda
  const [totalAmount, setTotalAmount] = useState(20000); // Sesuaikan totalAmount berdasarkan data Anda

  useEffect(() => {
    Animated.timing(progress, {
      toValue: percentage,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [percentage]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <Text style={styles.levelTitle}>Level {level}</Text>
        <Text style={styles.persenTitle}>
          {percentage}%{' '}
          <Text style={styles.amountTitle}>of {formatRupiah(totalAmount)}</Text>
        </Text>
      </View>

      <Gap height={10} width={0} />

      <View style={styles.progresOff}>
        <Animated.View style={[styles.progresOn, {width: percentage}]} />
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
