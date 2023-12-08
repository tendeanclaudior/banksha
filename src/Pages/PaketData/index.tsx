import React, {FC, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Fonts} from '../../Assets';
import {Button, Gap, Header} from '../../Components';

type Props = {
  navigation: {goBack: Function; navigate: Function};
  route: any;
};

const PaketData: FC<Props> = ({navigation, route}) => {
  const {dataProviders} = route.params;
  const [currentIndex, setCurrentIndex] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const styleBorder = (item: any) =>
    currentIndex === item.id ? '#53C1F9' : '#FFFFFF';
  const formatRupiah = (amount: any) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const onSubmit = () => {
    const data = {
      nameScreen: 'paket_data',
      data_plan_id: currentIndex,
      phone_number: phoneNumber,
    };
    navigation.navigate('SecurityCode', {data});
  };

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView
        contentContainerStyle={styles.page}
        showsVerticalScrollIndicator={false}>
        <Header title="Paket Data" onBack={() => navigation.goBack('')} />
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Phone Number</Text>
            <Gap height={14} width={0} />
            <View style={styles.inputView}>
              <Text style={styles.codeTitle}>+62</Text>
              <TextInput
                style={styles.input}
                keyboardType="number-pad"
                value={phoneNumber}
                onChangeText={value => setPhoneNumber(value)}
              />
            </View>

            <Gap height={40} width={0} />

            <Text style={styles.title}>Select Provider</Text>
            <Gap height={14} width={0} />
            <View style={styles.contentButton}>
              {dataProviders?.data?.map((item: any) => (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.5}
                  onPress={() => setCurrentIndex(item.id)}
                  style={[
                    styles.buttonViewGB,
                    {
                      borderColor: styleBorder(item),
                    },
                  ]}>
                  <Text style={styles.titleGB}>{item.name}</Text>
                  <Text style={styles.titleRP}>
                    Rp {formatRupiah(item.price)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View>
            {currentIndex !== null &&
            phoneNumber !== '' &&
            phoneNumber.length >= 10 ? (
              <View style={styles.button}>
                <Button title={'Continue'} onPress={() => onSubmit()} />
              </View>
            ) : null}
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
    borderWidth: 1,
    borderColor: '#FFFFFF',
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
