import React, {FC, useEffect, useState} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  Fonts,
  IconEditProfile,
  IconHelpCenter,
  IconLogout,
  IconMyPIN,
  IconMyRewards,
  IconWalletSettings,
  ProfileDummy,
} from '../../Assets';
import {Gap, Header, ProfileContent} from '../../Components';
import {logOutService, setLoading} from '../../Redux/Action';
import {getData} from '../../Utils/LocalStorage';

type Props = {
  navigation: {goBack: Function};
};

const Profile: FC<Props> = ({navigation}) => {
  const [token, setToken] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    getData('token').then(res => {
      setToken(res);
    });
  }, []);

  const logOut = async () => {
    dispatch(setLoading(true));
    dispatch(logOutService(token?.token_type, token?.token, navigation));
  };

  return (
    <SafeAreaView style={styles.page}>
      <Header onBack={() => navigation.goBack('')} title={'My Profile'} />
      <View style={styles.container}>
        <View style={styles.contentView}>
          <View style={styles.contentProfile}>
            <Image source={ProfileDummy} style={styles.profile} />
            <Gap height={15} width={0} />
            <Text style={styles.title}>Claudio Tendean</Text>
          </View>
          <Gap height={26} width={0} />
          <View>
            <ProfileContent image={IconEditProfile} title={'Edit Profile'} />
            <ProfileContent image={IconMyPIN} title={'My PIN'} />
            <ProfileContent
              image={IconWalletSettings}
              title={'Wallet Settings'}
            />
            <ProfileContent image={IconMyRewards} title={'My Rewards'} />
            <ProfileContent image={IconHelpCenter} title={'Help Center'} />
            <ProfileContent
              image={IconLogout}
              title={'Log Out'}
              onPress={() => logOut()}
            />
          </View>
        </View>
        <View>
          <Text style={styles.subTitle}>Report a Problem</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F6F8FB',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  contentView: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 30,
  },
  contentProfile: {
    alignItems: 'center',
    marginTop: 30,
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 120,
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.Poppins[500],
    color: '#14193F',
    textTransform: 'capitalize',
  },
  subTitle: {
    fontSize: 16,
    fontFamily: Fonts.Poppins[400],
    color: '#696B76',
    textAlign: 'center',
  },
});
