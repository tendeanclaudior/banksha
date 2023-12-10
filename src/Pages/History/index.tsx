import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
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
  IconSendActive,
  IconShopActive,
  IconTopUpActive,
} from '../../Assets';
import {Gap, Header, LastestTransaction} from '../../Components';
import {isRefreshingService} from '../../Redux/Action';
import {API_URL} from '../../Service/config';
import {getData} from '../../Utils/LocalStorage';

const History = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const {isRefreshing} = useSelector(state => state.globalReducer);
  const dispatch = useDispatch();

  const formatRupiah = (amount: any) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  useEffect(() => {
    getHistory();
  }, []);

  const onRefresh = useCallback(() => {
    dispatch(isRefreshingService(true));
    setTimeout(() => {
      getHistory();
      dispatch(isRefreshingService(false));
      setPage(1);
    }, 1000);
  }, [isRefreshing]);

  const getHistory = () => {
    getData('token').then(token => {
      axios
        .get(`${API_URL}/transactions?page=${page}`, {
          headers: {Authorization: `Bearer ${token.token}`},
        })
        .then(res => {
          console.log('RESPONSE :', res);
          if (page === 1) {
            setData(res.data.data);
          }
          dispatch(isRefreshingService(false));
        })
        .catch(err => {
          Alert.alert('Error', err.response, [{text: 'TUTUP'}]);
          dispatch(isRefreshingService(false));
        });
    });
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
        <Header title={'History'} />
        <View style={styles.container}>
          <View style={styles.contentLT}>
            {data.length > 0 ? (
              <View>
                {data.map((item: any) => (
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
                <Text style={styles.title}>Anda Belum Meliliki Transaksi</Text>
              </View>
            )}
          </View>
        </View>
        <Gap height={30} width={0} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F6F8FB',
  },
  container: {
    paddingHorizontal: 24,
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
  title: {
    fontSize: 14,
    fontFamily: Fonts.Poppins[600],
    color: '#A4A8AE',
    textAlign: 'center',
    maxWidth: 250,
  },
});
