import React, {FC, useCallback, useEffect, useState} from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Fonts,
  IconMore,
  IconSend,
  IconSendActive,
  IconShopActive,
  IconTopUp,
  IconTopUpActive,
  IconWithdraw,
} from '../../Assets';
import {
  CardSha,
  DoSomething,
  Gap,
  HeaderProfile,
  LastestTransaction,
  Modal,
  ProgresBar,
  SendAgain,
} from '../../Components';
import {useDispatch} from 'react-redux';
import {userService} from '../../Redux/Action';

type UserType = {
  name: string;
  card_number: string;
  balance: number;
};

type Props = {
  navigation: {navigate: Function};
};

const Home: FC<Props> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState<UserType | undefined>();
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userService(setUser));
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      dispatch(userService(setUser));
    }, 1000);
  }, [user]);

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => onRefresh()}
          />
        }>
        <View style={styles.container}>
          <HeaderProfile onPress={() => navigation.navigate('Profile')} />

          <Gap height={20} width={0} />

          <CardSha
            title={user?.name || ''}
            titleCard={user?.card_number.slice(12) || ''}
            titleAmount={user?.balance || 0}
          />

          <Gap height={20} width={0} />

          {/* <ProgresBar /> */}

          <Gap height={30} width={0} />

          <View>
            <Text style={styles.title}>Do Something</Text>
            <Gap height={14} width={0} />
            <View style={styles.contentDS}>
              <DoSomething
                icon={IconTopUp}
                title={'Top Up'}
                onPress={() => navigation.navigate('TopUp')}
              />
              <DoSomething
                icon={IconSend}
                title={'Send'}
                onPress={() => navigation.navigate('Transfer')}
              />
              <DoSomething icon={IconWithdraw} title={'Withdraw'} />
              <DoSomething
                icon={IconMore}
                title={'More'}
                onPress={() => setModalVisible(true)}
              />
            </View>
          </View>

          <Gap height={30} width={0} />

          <View>
            <Text style={styles.title}>Latest Transactions</Text>
            <Gap height={14} width={0} />
            <View style={styles.contentLT}>
              <LastestTransaction
                icon={IconTopUpActive}
                title={'TopUp'}
                date={'Yesterday'}
                amount={'+ 450.000'}
              />
              <LastestTransaction
                icon={IconSendActive}
                title={'Transfer'}
                date={'Aug 27 2023'}
                amount={'- 50.000'}
              />
              <LastestTransaction
                icon={IconShopActive}
                title={'Shop'}
                date={'Sep 04 2023'}
                amount={'- 100.000'}
              />
            </View>
          </View>

          <Gap height={30} width={0} />

          <View>
            <Text style={styles.title}>Send Again</Text>
            <Gap height={14} width={0} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <SendAgain title={'Acut'} />
              <SendAgain title={'Igit'} />
              <SendAgain title={'Atun'} />
              <SendAgain title={'Glo'} />
              <SendAgain title={'Bebel'} />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <Modal
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        onPress={() => {
          setModalVisible(!modalVisible);
          navigation.navigate('BuyData');
        }}
        screen={() => {
          setModalVisible(!modalVisible);
        }}
      />
    </SafeAreaView>
  );
};

export default Home;

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
  contentDS: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentLT: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 20,
    paddingTop: 22,
    paddingHorizontal: 22,
  },
});
