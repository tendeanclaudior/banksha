import React, {FC} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  CardSha,
  DoSomething,
  Gap,
  HeaderProfile,
  LastestTransaction,
  ProgresBar,
  SendAgain,
} from '../../Components';
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

type Props = {
  navigation: {navigate: Function};
};

const Home: FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <HeaderProfile title={'Claudio Tendean'} />

          <Gap height={20} width={0} />

          <CardSha
            title={'Claudio Tendean'}
            titleCard={'1280'}
            titleAmount={'10.000.000'}
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
                onPress={() => navigation.navigate('')}
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
