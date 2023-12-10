import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Fonts} from '../../../Assets';
import {Gap} from '../../Atoms';

type Props = {
  image: any;
  title: string;
  onPress: () => void;
};

const SendAgain: FC<Props> = ({image, title, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonView}
        onPress={onPress}>
        <Image source={image} style={styles.image} />
        <Gap height={13} width={0} />
        <Text style={styles.title}>@{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SendAgain;

const styles = StyleSheet.create({
  container: {
    marginRight: 17,
  },
  buttonView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: 90,
    paddingVertical: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 45,
  },
  title: {
    fontSize: 12,
    fontFamily: Fonts.Poppins[500],
    color: '#14193F',
    textTransform: 'capitalize',
  },
});
