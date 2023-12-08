import React, {FC, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Fonts} from '../../Assets';
import {Button, Gap, Header, Select, Wallet} from '../../Components';
import {paymentService} from '../../Redux/Action';
import {getData} from '../../Utils/LocalStorage';

type UserType = {
  name: string;
  card_number: string;
};

type Props = {
  navigation: {goBack: Function; navigate: Function};
};

const TopUp: FC<Props> = ({navigation}) => {
  const [user, setUser] = useState<UserType | undefined>();
  const [currentIndex, setCurrentIndex] = useState(null);
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.bankReducer);

  useEffect(() => {
    getData('user').then(res => {
      setUser(res);
    });
  }, [user]);

  useEffect(() => {
    dispatch(paymentService());
  }, []);

  const formattedCardNumber = user?.card_number?.replace(
    /(\d{4})(\d{4})(\d{4})(\d{4})/,
    '$1 $2 $3 $4',
  );

  const styleBorder = (item: any) =>
    currentIndex === item ? '#3783FB' : '#FFFFFF';

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title={'Top Up'} onBack={() => navigation.goBack()} />
        <View style={styles.container}>
          <Wallet
            title={'Wallet'}
            number={formattedCardNumber || ''}
            name={user?.name || ''}
          />

          <Gap height={40} width={0} />

          <View>
            <Text style={styles.title}>Select Bank</Text>
            <Gap height={10} width={0} />
            {data.map((item: any) => (
              <Select
                key={item.id}
                image={{uri: item.thumbnail}}
                name={item.name}
                time={item.time}
                onPress={() => setCurrentIndex(item.code)}
                styleBorder={styleBorder(item.code)}
              />
            ))}
          </View>

          {currentIndex !== null && (
            <View>
              <Button
                title={'Contine'}
                onPress={() =>
                  navigation.navigate('TopUpAmount', {
                    payment_method_code: currentIndex,
                    nameScreen: 'top_up',
                  })
                }
              />
              <Gap height={50} width={0} />
            </View>
          )}
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
