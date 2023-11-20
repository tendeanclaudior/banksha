import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {IconSendActive, IconShopActive, IconTopUpActive} from '../../Assets';
import {Gap, Header, LastestTransaction} from '../../Components';

const History = () => {
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title={'History'} />
        <View style={styles.container}>
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
});
