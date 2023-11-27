import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '../../Atoms';

type Props = {
  icon: any;
  title: string;
  onPress?: () => void;
};

const ModalContent: FC<Props> = ({icon, title, onPress}) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.3}
        style={styles.container}
        onPress={onPress}>
        <View style={styles.buttonView}>
          <Image source={icon} style={styles.icon} />
        </View>
        <Gap height={8} width={0} />
        <Text>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ModalContent;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 29,
  },
  buttonView: {
    backgroundColor: '#FFFFFF',
    width: 70,
    height: 70,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 26,
    height: 26,
  },
});
