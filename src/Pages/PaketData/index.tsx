import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Button, Gap, Header} from '../../Components';
import {Fonts} from '../../Assets';

const PULSA = [
  {
    id: 1,
    name: '10 GB',
    price: '218.000',
  },
  {
    id: 2,
    name: '25 GB',
    price: '420.000',
  },
  {
    id: 3,
    name: '40 GB',
    price: '2.500.000',
  },
  {
    id: 4,
    name: '99 GB',
    price: '5.000.000',
  },
];

const PaketData = () => {
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView
        contentContainerStyle={styles.page}
        showsVerticalScrollIndicator={false}>
        <Header title="Paket Data" onBack={() => ''} />
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Phone Number</Text>
            <Gap height={14} width={0} />
            <View style={styles.inputView}>
              <Text style={styles.codeTitle}>+62</Text>
              <TextInput style={styles.input} keyboardType="number-pad" />
            </View>

            <Gap height={40} width={0} />

            <Text style={styles.title}>Select Provider</Text>
            <Gap height={14} width={0} />
            <View style={styles.contentButton}>
              {PULSA.map((item, _) => (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.5}
                  style={styles.buttonViewGB}>
                  <Text style={styles.titleGB}>{item.name}</Text>
                  <Text style={styles.titleRP}>Rp {item.price}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View>
            <View style={styles.button}>
              <Button title={'Continue'} onPress={() => ''} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaketData;

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
  title: {
    fontSize: 16,
    fontFamily: Fonts.Poppins[600],
    color: '#14193F',
  },
  inputView: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 45,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  codeTitle: {
    fontSize: 14,
    fontFamily: Fonts.Poppins[500],
    color: '#A4A8AE',
  },
  input: {
    width: '100%',
    height: 45,
    fontSize: 14,
    fontFamily: Fonts.Poppins[500],
    color: '#14193F',
  },
  contentButton: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-between',
  },
  buttonViewGB: {
    backgroundColor: '#FFFFFF',
    width: 158,
    height: 171,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleGB: {
    fontSize: 32,
    fontFamily: Fonts.Poppins[500],
    color: '#14193F',
  },
  titleRP: {
    fontSize: 12,
    fontFamily: Fonts.Poppins[400],
    color: '#A4A8AE',
  },
  button: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    marginBottom: 10,
  },
});
