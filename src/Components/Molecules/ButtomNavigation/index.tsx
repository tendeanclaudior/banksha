import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {TabButtom} from '../../Atoms';

export type Props = {
  navigation: {
    navigate: Function;
    emit: Function;
  };
  state: {
    routes: {key: string; name: string}[];
    index: number;
  };
  descriptors: {
    [key: string]: {
      route: {
        key: string;
      };
      options: {
        tabBarLabel?: string;
        title?: string;
      };
    };
  };
};

const ButtomNavigation: FC<Props> = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabButtom
            key={index}
            // Konversi label ke tipe yang sesuai
            icon={
              label as
                | 'Overview'
                | 'History'
                | 'AddMoney'
                | 'Statistic'
                | 'Reward'
            }
            active={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        );
      })}
    </View>
  );
};

export default ButtomNavigation;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});
