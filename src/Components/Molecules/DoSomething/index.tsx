import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Fonts} from '../../../Assets';
import {Gap} from '../../Atoms';

type Props = {
  icon: any;
  title: string;
  onPress?: () => void;
};

const DoSomething: FC<Props> = ({icon, title, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonView}
        onPress={onPress}>
        <Image source={icon} style={styles.icon} />
      </TouchableOpacity>
      <Gap height={6} width={0} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default DoSomething;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  buttonView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 26,
    height: 26,
  },
  title: {
    fontSize: 14,
    fontFamily: Fonts.Poppins[500],
    color: '#14193F',
  },
});
