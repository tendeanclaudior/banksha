import React, {FC, useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, StyleSheet, Text, View} from 'react-native';
import {Fonts} from '../../../Assets';
import {Gap} from '../../Atoms';

type Props = {
  step: any;
  steps: any;
};

const ProgresBar: FC<Props> = (step, steps) => {
  const formatRupiah = amount => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };
  const {width: SCREEN_WIDTH} = Dimensions.get('window');
  const [width, setWidth] = useState(0);
  let animatedValue = useRef(new Animated.Value(-1000)).current;
  let reactive = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <Text style={styles.levelTitle}>Level 1</Text>
        <Text style={styles.persenTitle}>
          55% <Text style={styles.amountTitle}>of {formatRupiah(20000)}</Text>
        </Text>
      </View>

      <Gap height={10} width={0} />

      <View style={[styles.progresOff, {width: SCREEN_WIDTH - 22 / 0.24}]}>
        <Animated.View
          onLayout={e => {
            const newWidth = e.nativeEvent.layout.width;
            setWidth(newWidth);
          }}
          style={[styles.progresOn, {transform: [{translateX: animatedValue}]}]}
        />
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
