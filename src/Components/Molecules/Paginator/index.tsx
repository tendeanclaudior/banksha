import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

type Props = {
  data: string[];
  width: number;
  onPress: (index: number) => void;
  activeIndex: number;
};

const Paginator: FC<Props> = ({data, width, onPress, activeIndex}) => {
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const backgroundColor = i === activeIndex ? '#53C1F9' : '#F1F1F9';

        return (
          <TouchableOpacity
            style={[styles.dot, {width, backgroundColor}]}
            key={i.toString()}
            onPress={() => onPress(i)}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  dot: {
    height: 12,
    borderRadius: 5,
    marginHorizontal: 8,
  },
});
