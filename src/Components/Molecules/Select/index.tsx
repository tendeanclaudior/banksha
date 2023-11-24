import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Fonts} from '../../../Assets';
import {Gap} from '../../Atoms';

type Props = {
  image: any;
  name: string;
  time: string;
};

const Select: FC<Props> = ({image, name, time}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source={image} style={styles.icon} />
          <View>
            <Text style={styles.titleBank}>{name}</Text>
            <Gap height={2} width={0} />
            <Text style={styles.titleTime}>{time}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 20,
    paddingHorizontal: 22,
    paddingVertical: 28,
    marginBottom: 18,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 106,
    height: 30,
  },
  titleBank: {
    fontSize: 16,
    fontFamily: Fonts.Poppins[500],
    color: '#14193F',
    textAlign: 'right',
  },
  titleTime: {
    fontSize: 12,
    fontFamily: Fonts.Poppins[500],
    color: '#A4A8AE',
    textAlign: 'right',
  },
});
