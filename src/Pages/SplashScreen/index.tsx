import React, {FC, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {LogoLight} from '../../Assets';
import {getData} from '../../Utils/LocalStorage';

type Props = {
  navigation: {replace: Function; reset: Function};
};

const SplashScreen: FC<Props> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then(res => {
        if (res) {
          navigation.reset({index: 0, routes: [{name: 'SecurityCode'}]});
        } else {
          navigation.replace('OnBoarding');
        }
      });
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
