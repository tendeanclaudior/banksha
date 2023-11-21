import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fonts, IconCard} from '../../../Assets';
import {Gap} from '../../Atoms';

type Props = {
  number: string;
  name: string;
};

const Wallet: FC<Props> = ({number, name}) => {
  return (
    <View>
      <Text style={styles.title}>Wallet</Text>
      <Gap height={10} width={0} />
      <View style={styles.container}>
        <IconCard />
        <View>
          <Text style={styles.titleNumber}>{number}</Text>
          <Gap height={2} width={0} />
          <Text style={styles.titleName}>{name}</Text>
        </View>
      </View>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: Fonts.Poppins[600],
    color: '#14193F',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  titleNumber: {
    fontSize: 16,
    fontFamily: Fonts.Poppins[500],
    color: '#14193F',
  },
  titleName: {
    fontSize: 14,
    fontFamily: Fonts.Poppins[400],
    color: '#A4A8AE',
    textTransform: 'capitalize',
  },
});
