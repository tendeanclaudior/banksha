import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fonts, IconCard} from '../../../Assets';
import {Gap} from '../../Atoms';

type Props = {
  title: string;
  number: string;
  name?: string;
  balance?: number;
};

const Wallet: FC<Props> = ({title, number, name, balance}) => {
  const formatRupiah = (amount: any) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const addSpaces = (str: string) => {
    return str.replace(/(\d{4})/g, '$1 ');
  };

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Gap height={10} width={0} />
      <View style={styles.container}>
        <IconCard />
        <View>
          <Text style={styles.titleNumber}>{addSpaces(number)}</Text>
          <Gap height={2} width={0} />
          {name && <Text style={styles.titleName}>{name}</Text>}
          {balance && (
            <Text style={styles.titleName}>
              Balance: Rp {formatRupiah(balance)}
            </Text>
          )}
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
