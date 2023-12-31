import {
  Alert,
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {Fonts, IconDelete} from '../../Assets';
import {Gap} from '../../Components';
import {getData} from '../../Utils/LocalStorage';
import {useDispatch} from 'react-redux';
import {
  paketDataService,
  topUpService,
  transferService,
} from '../../Redux/Action/topup';
import {setLoading, userService} from '../../Redux/Action';

const pinLength = 6;

const padNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'del'];
const {width} = Dimensions.get('window');
const dialPadSize = width * 0.2;
const dialPadTextSize = dialPadSize * 0.4;
const _spacing = 30;

const DialPad = ({
  onPress,
}: {
  onPress: (item: (typeof padNumber)[number]) => void;
}) => {
  return (
    <FlatList
      numColumns={3}
      data={padNumber}
      style={styles.flatListView}
      scrollEnabled={false}
      columnWrapperStyle={{gap: _spacing}}
      contentContainerStyle={{gap: _spacing}}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item}) => {
        const backgroundContent = item === '' ? '#020518' : '#1A1D2E';

        return (
          <TouchableOpacity
            activeOpacity={0.5}
            disabled={item === ''}
            onPress={() => {
              onPress(item);
            }}>
            <View
              style={[
                styles.padContent,
                {
                  width: dialPadSize,
                  height: dialPadSize,
                  borderRadius: dialPadSize,
                  backgroundColor: backgroundContent,
                },
              ]}>
              {item === 'del' ? (
                <IconDelete />
              ) : (
                <Text style={styles.titleNumber}>{item}</Text>
              )}
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

type Props = {
  navigation: {reset: Function; replace: Function};
  route: any;
};

const SecurityCode: FC<Props> = ({navigation, route}) => {
  const [pin, setPIN] = useState<number[]>([]);
  const {data} = route.params || {};
  const dispatch = useDispatch();

  const pinString = pin.join(''); // untuk mengubah array pin menjadi string
  const pinSpilt = pinString;

  useEffect(() => {
    getData('profileUser').then(res => {
      const myPIN = res?.pin;
      if (pin.length === pinLength) {
        if (pinString !== myPIN) {
          Alert.alert('Error', 'Maaf PIN yang anda masukan salah', [
            {text: 'Tutup', onPress: () => setPIN([])},
          ]);
        } else {
          if (data?.nameScreen === 'top_up') {
            const sendData = {
              amount: data.amount,
              pin: pinSpilt,
              payment_method_code: data.payment_method_code,
            };
            setPIN([]);
            dispatch(setLoading(true));
            dispatch(topUpService(sendData, navigation));
          } else if (data?.nameScreen === 'transfer') {
            const sendData = {
              amount: data.amount,
              pin: pinSpilt,
              send_to: data.payment_method_code,
            };
            setPIN([]);
            dispatch(setLoading(true));
            dispatch(transferService(sendData, navigation));
          } else if (data?.nameScreen === 'paket_data') {
            const sendData = {
              data_plan_id: data.data_plan_id,
              phone_number: data.phone_number,
              pin: pinSpilt,
            };
            setPIN([]);
            dispatch(setLoading(true));
            dispatch(paketDataService(sendData, navigation));
          } else if (data?.nameScreen === 'edit_profile') {
            navigation.replace('EditProfile');
          } else {
            const user = dispatch(userService());
            navigation.reset({
              index: 0,
              routes: [{name: 'MainApp', user: user}],
            });
          }
        }
      }
    });
  }, [pin, navigation]);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>Sha PIN</Text>
          <Gap height={25} width={0} />
          <View style={styles.input}>
            {[...Array(pinLength).keys()].map(i => {
              const isSelected = pin[i] !== undefined && pin[i] !== null;

              return (
                <View key={i}>
                  {isSelected ? <Text style={styles.titleInput}>*</Text> : ''}
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.padView}>
          <DialPad
            onPress={item => {
              if (item === 'del') {
                setPIN(prevCode => prevCode.slice(0, prevCode.length - 1));
              } else if (typeof item === 'number') {
                if (pin.length === pinLength) {
                  return;
                }
                setPIN(prevCode => [...prevCode, item]);
              }
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SecurityCode;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#020518',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 24 * 2,
  },
  headerContent: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.Poppins[600],
    color: '#FFFFFF',
    textAlign: 'center',
  },
  input: {
    flexDirection: 'row',
    gap: 10,
    borderBottomWidth: 1,
    borderColor: '#262939',
  },
  titleInput: {
    fontSize: 30,
    fontFamily: Fonts.Poppins[600],
    color: '#FFFFFF',
  },
  padView: {
    alignItems: 'center',
    marginBottom: 30,
  },
  flatListView: {
    flexGrow: 0,
  },
  padContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleNumber: {
    fontSize: dialPadTextSize,
    fontFamily: Fonts.Poppins[600],
    color: '#FFFFFF',
  },
});
