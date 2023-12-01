import React, {FC, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Fonts, IconCheck, ProfileDummy} from '../../../Assets';
import {Gap} from '../../Atoms';
import {getData} from '../../../Utils/LocalStorage';

type Props = {
  onPress: () => void;
};

const HeaderProfile: FC<Props> = ({onPress}) => {
  const [dataProfileUser, setDataProfileUser] = useState(ProfileDummy);

  useEffect(() => {
    getData('profileUser').then(res => {
      setDataProfileUser(res);
    });
  }, [dataProfileUser]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Howdy,</Text>
        <Gap height={2} width={0} />
        <Text style={styles.subTitle}>{dataProfileUser.name}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <Image
          source={{uri: dataProfileUser.profile_picture}}
          style={styles.profile}
        />
        {dataProfileUser.profile_picture !== '' && (
          <View style={styles.iconView}>
            <IconCheck />
          </View>
        )}
      </TouchableOpacity>
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
  iconView: {
    position: 'absolute',
    top: 0,
    left: 45,
  },
});
