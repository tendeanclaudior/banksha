import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Fonts} from '../../../Assets';
import {Gap} from '../../Atoms';

type Props = {
  icon: any;
  title: string;
  date: string;
  amount: string;
};

const LastestTransaction: FC<Props> = ({icon, title, date, amount}) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <Gap width={16} height={0} />
      <View style={styles.titleView}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date.slice(0, 10)}</Text>
        </View>
        <Text style={styles.amount}>{amount}</Text>
      </View>
    </View>
  );
};

export default LastestTransaction;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 18,
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 48,
  },
  titleView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.Poppins[500],
    color: '#14193F',
  },
  date: {
    fontSize: 12,
    fontFamily: Fonts.Poppins[400],
    color: '#A4A8AE',
    textTransform: 'capitalize',
  },
  amount: {
    fontSize: 16,
    fontFamily: Fonts.Poppins[500],
    color: '#14193F',
  },
});
