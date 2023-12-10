import React, {FC, useCallback, useEffect, useState} from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
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
  TipsCard,
} from '../../Components';
import {
  historyTransferService,
  isRefreshingService,
  tipsService,
  transactionService,
  userService,
} from '../../Redux/Action';

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
  const [username, setUserName] = useState([]);
  const {data} = useSelector(state => state.transactionReducer);
  const {isRefreshing} = useSelector(state => state.globalReducer);
  const {tips} = useSelector(state => state.tipsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userService(setUser));
    dispatch(transactionService());
    dispatch(tipsService());
    dispatch(historyTransferService(setUserName));
  }, []);

  const onRefresh = useCallback(() => {
    dispatch(isRefreshingService(true));
    setTimeout(() => {
      dispatch(isRefreshingService(false));
      dispatch(userService(setUser));
      dispatch(transactionService());
    }, 1000);
  }, [user, data]);

  const formatRupiah = (amount: any) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
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

          <ProgresBar />

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
              {data.length > 0 ? (
                <View>
                  {data.slice(0, 4).map((item: any) => (
                    <LastestTransaction
                      key={item.id}
                      icon={
                        item.transaction_type.code === 'top_up'
                          ? IconTopUpActive
                          : item.transaction_type.code === 'transfer'
                          ? IconSendActive
                          : IconShopActive
                      }
                      title={
                        item.transaction_type.code === 'top_up'
                          ? 'Top Up'
                          : item.transaction_type.code === 'transfer'
                          ? 'Transfer'
                          : 'Internet'
                      }
                      date={item.created_at}
                      amount={
                        (item.transaction_type.code === 'top_up' ? '+' : '-') +
                        ' ' +
                        formatRupiah(item.amount)
                      }
                    />
                  ))}
                </View>
              ) : (
                <View style={styles.contentTitle}>
                  <Text style={styles.titleTransaction}>
                    Anda Belum Meliliki Transaksi
                  </Text>
                </View>
              )}
            </View>
          </View>

          <Gap height={30} width={0} />

          <View>
            <Text style={styles.title}>Send Again</Text>
            <Gap height={14} width={0} />
            {username.length > 0 ? (
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {username.map((item: any) => (
                  <SendAgain
                    key={item.id}
                    image={{uri: item.profile_picture}}
                    title={item.name.slice(0, 5)}
                    onPress={() =>
                      navigation.navigate('TopUpAmount', {
                        payment_method_code: item.username,
                        nameScreen: 'transfer',
                      })
                    }
                  />
                ))}
              </ScrollView>
            ) : (
              <View style={styles.contentTitle}>
                <Text style={styles.titleTransaction}>
                  Anda Belum Meliliki Transaksi
                </Text>
              </View>
            )}
          </View>

          <Gap height={30} width={0} />

          {tips.length > 0 && (
            <View>
              <Text style={styles.title}>Friendly Tips</Text>
              <Gap height={14} width={0} />
              <View style={styles.contentFT}>
                {tips.map((item: any, index: any) => (
                  <TipsCard
                    key={index.toString()}
                    image={{uri: item.thumbnail}}
                    title={item.title}
                  />
                ))}
              </View>
            </View>
          )}
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
  contentTitle: {
    alignItems: 'center',
    marginBottom: 22,
  },
  titleTransaction: {
    fontSize: 14,
    fontFamily: Fonts.Poppins[600],
    color: '#A4A8AE',
    textAlign: 'center',
    maxWidth: 250,
  },
  contentFT: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
