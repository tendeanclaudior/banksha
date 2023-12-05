import React, {FC, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Fonts} from '../../Assets';
import {Button, Gap} from '../../Components';

type Props = {
  route: any;
  navigation: {navigate: Function};
};

const TopUpAmount: FC<Props> = ({route, navigation}) => {
  const {payment_method_code, nameScreen} = route.params;
  const [topUp, setTopUp] = useState('');

  const onSubmit = () => {
    const data = {
      payment_method_code: payment_method_code,
      nameScreen: nameScreen,
      amount: Number(topUp),
    };

    navigation.navigate('SecurityCode', {data: data});
  };

  return (
    <>
      <SafeAreaView style={styles.page}>
        <ScrollView
          contentContainerStyle={styles.contianer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.contianer}>
            <View>
              <Text style={styles.title}>Total Amount</Text>
              <Gap height={67} width={0} />
              <View style={styles.inputView}>
                <Text style={styles.titleRP}>RP.</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="number-pad"
                  value={topUp}
                  onChangeText={value => setTopUp(value)}
                  placeholderTextColor={'#FFFFFF'}
                />
              </View>
            </View>
            <Gap height={50} width={0} />
            <View>
              <View style={styles.footerView}>
                <View style={styles.buttonView}>
                  <Button title={'Checkout Now'} onPress={() => onSubmit()} />
                </View>
                <View>
                  <Text style={styles.subTitle}>Terms & Conditions</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default TopUpAmount;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#020518',
  },
  contianer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 36,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.Poppins[600],
    color: '#FFFFFF',
    textAlign: 'center',
  },
  inputView: {
    borderBottomWidth: 1,
    borderBottomColor: '#262939',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  titleRP: {
    fontSize: 36,
    fontFamily: Fonts.Poppins[300],
    color: '#FFFFFF',
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontFamily: Fonts.Poppins[500],
    fontSize: 36,
  },
  footerView: {
    alignItems: 'center',
  },
  buttonView: {
    width: 260,
    marginBottom: 25,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: Fonts.Poppins[400],
    color: '#696B76',
  },
});
