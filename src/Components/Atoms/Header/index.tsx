import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Fonts, IconBack, IconFilter} from '../../../Assets';

type Props = {
  title: string;
  onBack?: () => void;
  onFilter?: () => void;
};

const Header: FC<Props> = ({title, onBack, onFilter}) => {
  return (
    <View style={styles.container}>
      {onBack ? (
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonBack}
          onPress={onBack}>
          <IconBack />
        </TouchableOpacity>
      ) : (
        <View style={styles.content} />
      )}
      <Text style={styles.title}>{title}</Text>
      {onFilter ? (
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.butonFilter}
          onPress={onFilter}>
          <IconFilter />
        </TouchableOpacity>
      ) : (
        <View style={styles.content} />
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 28,
  },
  buttonBack: {
    width: 50,
    height: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  content: {
    width: 50,
    height: 50,
  },
  butonFilter: {
    width: 50,
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.Poppins[600],
    color: '#14193F',
  },
});
