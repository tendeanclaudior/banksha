import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Gap, Header, TextInput} from '../../Components';
import {Fonts} from '../../Assets';

type Props = {
  navigation: {goBack: Function};
};

const Transfer: FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title={'Transfer'} onBack={() => navigation.goBack()} />

        <View style={styles.container}>
          <TextInput title={'Search'} />

          <Gap height={40} width={0} />

          <View style={styles.contentTitle}>
            <Text style={styles.title}>
              {' '}
              Silahkan cari user yang ingin anda transfer kan
            </Text>
          </View>
        </View>
      </ScrollView>
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
    paddingHorizontal: 24,
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
});
