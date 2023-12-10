import React, {FC, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Fonts} from '../../Assets';
import {
  Button,
  Gap,
  Header,
  ResentUsers,
  SelectUser,
  TextInput,
} from '../../Components';
import {
  historyTransferService,
  setLoading,
  transferToUserService,
} from '../../Redux/Action';

type Props = {
  navigation: {goBack: Function; navigate: Function};
};

const Transfer: FC<Props> = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);
  const [username, setUserName] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (search !== '') {
        getUsers();
      } else {
        setUsers([]);
        setCurrentIndex(null);
      }
    }, 1000);
  }, [search]);

  const getUsers = () => {
    dispatch(setLoading(true));
    dispatch(transferToUserService(search, setUsers, setUsers));
  };

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(historyTransferService(setUserName));
  }, []);

  const onSubmit = () => {
    navigation.navigate('TopUpAmount', {
      payment_method_code: currentIndex,
      nameScreen: 'transfer',
    });
  };

  const styleBorder = (item: any) =>
    currentIndex === item.username ? '#3783FB' : '#FFFFFF';

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title={'Transfer'} onBack={() => navigation.goBack()} />

        <View style={styles.container}>
          <View>
            <TextInput
              title={'Search'}
              value={search}
              onChangeText={value => setSearch(value)}
            />

            <Gap height={40} width={0} />

            <View>
              {users.length > 0 ? (
                <>
                  <View>
                    <Text style={styles.titleResult}>Result</Text>
                  </View>

                  <View style={styles.cardSelect}>
                    {users?.map((item: any) => (
                      <SelectUser
                        key={item.id}
                        image={item.profile_picture}
                        titleName={item.name}
                        titleEmail={item.username}
                        onPress={() => setCurrentIndex(item.username)}
                        styleBorder={styleBorder(item)}
                      />
                    ))}
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.contentRecent}>
                    <Text style={styles.titleResult}>Recent Users</Text>
                  </View>
                  {username.length > 0 ? (
                    <>
                      {username.map((item: any) => (
                        <ResentUsers
                          key={item.id}
                          image={{uri: item.profile_picture}}
                          title={item.name}
                          subTitle={item.username}
                          onPress={() =>
                            navigation.navigate('TopUpAmount', {
                              payment_method_code: item.username,
                              nameScreen: 'transfer',
                            })
                          }
                        />
                      ))}
                    </>
                  ) : (
                    <View style={styles.contentTitle}>
                      <Text style={styles.title}>
                        Silahkan cari user yang ingin anda transfer kan
                      </Text>
                    </View>
                  )}
                </>
              )}
            </View>
          </View>
        </View>
      </ScrollView>

      {currentIndex !== null && (
        <View style={styles.buttonView}>
          <Button title={'Continue'} onPress={() => onSubmit()} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F6F8FB',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  titleResult: {
    fontSize: 16,
    fontFamily: Fonts.Poppins[600],
    color: '#14193F',
    marginBottom: 14,
  },
  cardSelect: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-between',
  },
  contentRecent: {
    alignItems: 'flex-start',
  },
  contentTitle: {
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontFamily: Fonts.Poppins[600],
    color: '#A4A8AE',
    textAlign: 'center',
    maxWidth: 250,
  },
  buttonView: {
    position: 'absolute',
    bottom: 30,
    left: 24,
    right: 24,
  },
});
