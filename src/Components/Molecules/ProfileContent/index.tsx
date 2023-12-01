import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Fonts} from '../../../Assets';

type Props = {
  image: any;
  title: string;
  onPress?: () => void;
};

const ProfileContent: FC<Props> = ({image, title, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={onPress}>
      <Image source={image} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ProfileContent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    width: '100%',
    marginBottom: 30,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.Poppins[500],
    color: '#14193F',
  },
});
