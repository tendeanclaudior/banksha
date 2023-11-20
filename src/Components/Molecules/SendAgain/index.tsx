import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Fonts, ProfileDummy} from '../../../Assets';
import {Gap} from '../../Atoms';

type Props = {
  //   image: any;
  title: string;
};

const SendAgain: FC<Props> = ({title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} style={styles.buttonView}>
        <Image source={ProfileDummy} style={styles.image} />
        <Gap height={13} width={0} />
        <Text style={styles.title}>@{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SendAgain;

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
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
  },
  title: {
    fontSize: 12,
    fontFamily: Fonts.Poppins[500],
    color: '#14193F',
    textTransform: 'capitalize',
  },
});
