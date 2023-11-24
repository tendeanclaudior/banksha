import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Gap, Header, Select, Wallet} from '../../Components';
import {Fonts, IconINDOSAT, IconSINGTEL, IconTELKOM} from '../../Assets';

type Props = {
  navigation: {goBack: Function};
};

const BuyData: FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title={'Top Up'} onBack={() => navigation.goBack()} />
        <View style={styles.container}>
          <Wallet
            title={'From Wallet'}
            number={'8008 2208 1996'}
            balance={'20.000'}
          />

          <Gap height={40} width={0} />

          <View>
            <Text style={styles.title}>Select Provider</Text>
            <Gap height={10} width={0} />
            <Select image={IconTELKOM} name={'Telkomsel'} time={'Available'} />
            <Select
              image={IconINDOSAT}
              name={'Indosat Ooredoo'}
              time={'Available'}
            />
            <Select
              image={IconSINGTEL}
              name={'Singtel ID'}
              time={'Available'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BuyData;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F6F8FB',
  },
  container: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.Poppins[600],
    color: '#14193F',
  },
});
