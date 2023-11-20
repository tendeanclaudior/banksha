import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Fonts, IconFilter} from '../../../Assets';

type Props = {
  title: string;
};

const Header: FC<Props> = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content} />
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity activeOpacity={0.5} style={styles.butonView}>
        <IconFilter />
      </TouchableOpacity>
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
  content: {
    width: 10,
    height: 10,
  },
  butonView: {
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
