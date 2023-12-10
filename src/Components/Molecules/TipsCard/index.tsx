import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Fonts} from '../../../Assets';
import {Gap} from '../../Atoms';

type Props = {
  image: any;
  title: string;
};

const TipsCard: FC<Props> = ({image, title}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Gap height={12} width={0} />
      <View style={styles.contentTitle}>
        <Text style={styles.title}>{title.slice(0, 30)}</Text>
      </View>
    </View>
  );
};

export default TipsCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: 155,
    height: 176,
    borderRadius: 20,
    marginBottom: 30,
  },
  image: {
    width: 155,
    height: 110,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  contentTitle: {
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 14,
    fontFamily: Fonts.Poppins[500],
    color: '#14193F',
  },
});
