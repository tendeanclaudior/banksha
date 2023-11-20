import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';
import {Fonts, IconDelete} from '../../Assets';
import {Gap} from '../../Components';

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
  navigation: {replace: Function};
};

const SecurityCode: FC<Props> = ({navigation}) => {
  const [code, setCode] = useState<number[]>([]);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>Sha PIN</Text>
          <Gap height={72} width={0} />
          <View style={styles.input}>
            {[...Array(pinLength).keys()].map(i => {
              const isSelected = !!code[i];
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
                setCode(prevCode => prevCode.slice(0, prevCode.length - 1));
              } else if (typeof item === 'number') {
                if (code.length === pinLength) return;
                setCode(prevCode => [...prevCode, item]);
                // navigation.replace(() => '');
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
    fontSize: 36,
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
