import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fonts} from '../../../Assets';
import {Gap} from '../../Atoms';

type Props = {
  title: string;
  titleCard: string;
  titleAmount: number;
};

const CardSha: FC<Props> = ({title, titleCard, titleAmount}) => {
  const formatRupiah = amount => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <View style={styles.container}>
      <View style={styles.circleView} />
      <Text style={styles.titleName}>{title}</Text>

      <Gap height={28} width={0} />

      <View style={styles.titleCardView}>
        <Text style={styles.titleCard}>****</Text>
        <Text style={styles.titleCard}>****</Text>
        <Text style={styles.titleCard}>****</Text>
        <Text style={styles.titleCard}>{titleCard}</Text>
      </View>

      <Gap height={21} width={0} />

      <Text style={styles.titileBalance}>Balance</Text>
      <Gap height={5} width={0} />
      <Text style={styles.titleAmount}>IDR {formatRupiah(titleAmount)}</Text>
    </View>
  );
};

export default CardSha;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5142E6',
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderRadius: 28,
    overflow: 'hidden',
  },
  circleView: {
    width: 294,
    height: 294,
    borderWidth: 60,
    borderColor: '#53C1F9',
    borderRadius: 294 / 2,
    position: 'absolute',
    top: -60,
    right: -160,
  },
  titleName: {
    fontSize: 18,
    fontFamily: Fonts.Poppins[500],
    color: '#FFFFFF',
    textTransform: 'capitalize',
  },
  titleCard: {
    fontSize: 18,
    fontFamily: Fonts.Poppins[500],
    color: '#FFFFFF',
  },
  titleCardView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  titileBalance: {
    fontSize: 14,
    fontFamily: Fonts.Poppins[400],
    color: '#FFFFFF',
  },
  titleAmount: {
    fontSize: 20,
    fontFamily: Fonts.Poppins[600],
    color: '#FFFFFF',
  },
});
