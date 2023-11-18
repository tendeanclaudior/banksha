import React, {FC, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {LogoLight} from '../../Assets';

type Props = {
  navigation: {replace: Function};
};

const SplashScreen: FC<Props> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnBoarding');
    }, 3000);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.page}>
      <LogoLight />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#020518',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
