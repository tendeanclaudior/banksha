import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {
  Fonts,
  IconAddMoney,
  IconHistory,
  IconHistoryActive,
  IconOverview,
  IconOverviewActive,
  IconReward,
  IconRewardAcive,
  IconStatistic,
  IconStatisticActive,
} from '../../../Assets';
import Gap from '../Gap';

export type Props = {
  icon: 'Overview' | 'History' | 'AddMoney' | 'Statistic' | 'Reward';
  active?: boolean;
  onPress: () => void;
  onLongPress: () => void;
};

const TabButtom: FC<Props> = ({icon, active, onPress, onLongPress}) => {
  const Icon = () => {
    switch (icon) {
      case 'Overview':
        return active ? <IconOverviewActive /> : <IconOverview />;
      case 'History':
        return active ? <IconHistoryActive /> : <IconHistory />;
      case 'AddMoney':
        return <IconAdd />;
      case 'Statistic':
        return active ? <IconStatisticActive /> : <IconStatistic />;
      case 'Reward':
        return active ? <IconRewardAcive /> : <IconReward />;
      default:
        return <IconOverview />;
    }
  };

  const IconAdd = () => {
    return (
      <View style={styles.addMoneyContainer}>
        <View style={styles.addMoneyView}>
          <IconAddMoney />
        </View>
      </View>
    );
  };

  const titleStyle = [active ? styles.title : styles.titleActive];

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.iconView}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Gap height={6} width={0} />
      {icon !== 'AddMoney' && <Text style={titleStyle}>{icon}</Text>}
    </TouchableOpacity>
  );
};

export default TabButtom;

const styles = StyleSheet.create({
  iconView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleActive: {
    fontSize: 10,
    fontFamily: Fonts.Poppins[500],
    color: '#14193F',
  },
  title: {
    fontSize: 10,
    fontFamily: Fonts.Poppins[500],
    color: '#53C1F9',
  },
  addMoneyContainer: {
    backgroundColor: '#F6F8FB',
    width: 68,
    height: 68,
    borderRadius: 68,
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
  },
  addMoneyView: {
    backgroundColor: '#5142E6',
    width: 48,
    height: 48,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
