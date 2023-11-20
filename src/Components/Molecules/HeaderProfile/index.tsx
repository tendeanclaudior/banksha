import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Fonts, ProfileDummy} from '../../../Assets';
import {Gap} from '../../Atoms';

type Props = {
  title: string;
};

const HeaderProfile: FC<Props> = ({title}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Howdy,</Text>
        <Gap height={2} width={0} />
        <Text style={styles.subTitle}>{title}</Text>
      </View>
      <Image source={ProfileDummy} style={styles.profile} />
    </View>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.Poppins[400],
    color: '#696B76',
  },
  subTitle: {
    fontSize: 20,
    fontFamily: Fonts.Poppins[600],
    color: '#14193F',
    textTransform: 'capitalize',
  },
});
