import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Fonts, ProfileDummy} from '../../../Assets';
import {Gap} from '../../Atoms';

type Props = {
  image: string;
  titleName: string;
  titleEmail: string;
  onPress: () => void;
  styleBorder: any;
};

const SelectUser: FC<Props> = ({
  image,
  titleName,
  titleEmail,
  onPress,
  styleBorder,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onPress()}
      style={[
        styles.container,
        {
          borderColor: styleBorder,
        },
      ]}>
      {image !== '' ? (
        <Image source={{uri: image}} style={styles.image} />
      ) : (
        <Image source={ProfileDummy} style={styles.image} />
      )}
      <Gap height={10} width={0} />
      <Text style={styles.titleName}>{titleName.slice(0, 6)}</Text>
      <Gap height={10} width={0} />
      <Text style={styles.titleEmail}>@{titleEmail.slice(0, 5)}</Text>
    </TouchableOpacity>
  );
};

export default SelectUser;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 20,
    width: 155,
    height: 171,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  titleName: {
    fontSize: 16,
    fontFamily: Fonts.Poppins[500],
    color: '#14193F',
  },
  titleEmail: {
    fontSize: 16,
    fontFamily: Fonts.Poppins[400],
    color: '#A4A8AE',
  },
});
