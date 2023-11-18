import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Fonts} from '../../../Assets';

type Props = {
  title: string;
  onPress: () => void;
};

const Button: FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.buttonView}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: '#5142E6',
    borderRadius: 56,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.Poppins[600],
    color: '#FFFFFF',
  },
});
