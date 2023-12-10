import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Fonts} from '../../../Assets';
import {Gap} from '../../Atoms';

type Props = {
  image: any;
  title: string;
  subTitle: string;
  onPress: () => void;
};

const ResentUsers: FC<Props> = ({image, title, subTitle, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Gap height={2} width={0} />
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ResentUsers;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 20,
    paddingHorizontal: 23,
    paddingVertical: 22,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 18,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 45,
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.Poppins[500],
    color: '#14193F',
  },
  subTitle: {
    fontSize: 12,
    fontFamily: Fonts.Poppins[400],
    color: '#A4A8AE',
  },
});
