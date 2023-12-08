import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Button, Gap} from '../../Components';
import {Fonts} from '../../Assets';

type Props = {
  navigation: {reset: Function};
  route: any;
};

const TopUpSuccess: FC<Props> = ({navigation, route}) => {
  const {nameScreen} = route.params;

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>
          {nameScreen === 'top_up'
            ? 'Top Up\nWallet Berhasil'
            : nameScreen === 'transfer'
            ? 'Transfer\nBerhasil'
            : 'Berhasil Transfer'}
        </Text>
        <Gap height={26} width={0} />
        <Text style={styles.subTitle}>
          Use the money wisely and grow your finance
        </Text>
        <Gap height={50} width={0} />
        <View style={styles.buttonView}>
          <Button
            title={'Back To Home'}
            onPress={() =>
              navigation.reset({index: 0, routes: [{name: 'MainApp'}]})
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TopUpSuccess;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F6F8FB',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.Poppins[600],
    color: '#14193F',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    fontFamily: Fonts.Poppins[400],
    color: '#A4A8AE',
    maxWidth: 250,
    textAlign: 'center',
  },
  buttonView: {
    width: 230,
  },
});
