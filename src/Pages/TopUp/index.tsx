import React, {FC} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Fonts, IconBCA, IconBNI, IconMANDIRI} from '../../Assets';
import {Gap, Header, SelectBank, Wallet} from '../../Components';

type Props = {
  navigation: {goBack: Function};
};

const TopUp: FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title={'Top Up'} onBack={() => navigation.goBack()} />
        <View style={styles.container}>
          <Wallet number={'8008 2208 1996'} name={'Claudio Tendean'} />

          <Gap height={40} width={0} />

          <View>
            <Text style={styles.title}>SelectBank</Text>
            <Gap height={10} width={0} />
            <SelectBank image={IconBCA} name={'BANK BCA'} time={'20 mins'} />
            <SelectBank image={IconBNI} name={'BANK BNI'} time={'20 mins'} />
            <SelectBank
              image={IconMANDIRI}
              name={'BANK MANDIRI'}
              time={'20 mins'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TopUp;

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
