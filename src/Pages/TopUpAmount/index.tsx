import {StyleSheet, Text, View, SafeAreaView, TextInput} from 'react-native';
import React from 'react';
import {Fonts} from '../../Assets';
import {Button, Gap} from '../../Components';

const TopUpAmount = () => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.contianer}>
        <View>
          <Text style={styles.title}>Total Amount</Text>
          <Gap height={67} width={0} />
          <View style={styles.inputView}>
            <Text style={styles.titleRP}>RP.</Text>
            <TextInput style={styles.input} keyboardType="number-pad" />
          </View>
        </View>
        <View style={styles.footerView}>
          <View style={styles.buttonView}>
            <Button title={'Checkout Now'} onPress={() => ''} />
          </View>
          <Text style={styles.subTitle}>Terms & Conditions</Text>
        </View>
      </View>
    </SafeAreaView>
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
