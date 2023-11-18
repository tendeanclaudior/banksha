import React, {FC} from 'react';
import {TextInput as InputText, StyleSheet, Text, View} from 'react-native';
import {Fonts} from '../../../Assets';
import Gap from '../Gap';

type Props = {
  title: string;
};

const TextInput: FC<Props> = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Gap height={8} width={0} />
      <View style={styles.inputView}>
        <InputText style={styles.input} placeholderTextColor={'#EFEEF1'} />
      </View>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontFamily: Fonts.Poppins[500],
    color: '#14193F',
  },
  inputView: {
    borderWidth: 1,
    borderRadius: 14,
    borderColor: '#EFEEF1',
    width: '100%',
    height: 45,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  input: {
    color: '#14193F',
  },
});
