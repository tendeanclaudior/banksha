import React, {FC, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Fonts} from '../../Assets';
import {Button, Gap, Header, Select, Wallet} from '../../Components';
import {providerService, userService} from '../../Redux/Action';

type UserType = {
  card_number: string;
  balance: number;
};

type Props = {
  navigation: {goBack: Function; navigate: Function};
};

const BuyData: FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const {providers} = useSelector(state => state.providerReducer);
  const [user, setUser] = useState<UserType | undefined>();
  const [dataProviders, setDataProviders] = useState({
    id: null,
    data: [],
  });

  useEffect(() => {
    dispatch(providerService());
    dispatch(userService(setUser));
  }, []);

  const onSaveProviders = (item: any) => {
    setDataProviders({
      ...dataProviders,
      id: item.id,
      data: item.data_plans,
    });
  };

  const styleBorder = (item: any) =>
    dataProviders.id === item.id ? '#3783FB' : '#FFFFFF';

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title={'Top Up'} onBack={() => navigation.goBack()} />
        <View style={styles.container}>
          <Wallet
            title={'From Wallet'}
            number={user?.card_number || ''}
            balance={user?.balance || 1}
          />

          <Gap height={40} width={0} />

          <View>
            <Text style={styles.title}>Select Provider</Text>
            <Gap height={10} width={0} />
            {providers.map((item: any) => (
              <Select
                key={item.id}
                image={{uri: item.thumbnail}}
                name={item.name}
                time={item.status}
                onPress={() => onSaveProviders(item)}
                styleBorder={styleBorder(item)}
              />
            ))}
          </View>

          {dataProviders.id !== null && (
            <View>
              <Button
                title={'Continue'}
                onPress={() =>
                  navigation.navigate('PaketData', {dataProviders})
                }
              />
            </View>
          )}
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
