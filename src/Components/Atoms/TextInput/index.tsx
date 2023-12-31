import React, {FC, useState} from 'react';
import {TextInput as InputText, StyleSheet, Text, View} from 'react-native';
import {Fonts} from '../../../Assets';
import Gap from '../Gap';

type Props = {
  title: string;
  value: string;
  onChangeText: (value: string) => void;
  secureTextEntry?: boolean;
  editable?: boolean;
};

const TextInput: FC<Props> = ({
  title,
  value,
  onChangeText,
  secureTextEntry,
  editable,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const styleBorder = isFocus ? '#3783FB' : '#EFEEF1';

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Gap height={8} width={0} />
      <View
        style={[
          styles.inputView,
          {
            borderColor: styleBorder,
          },
        ]}>
        <InputText
          editable={editable}
          style={styles.input}
          placeholderTextColor={'#EFEEF1'}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
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
    backgroundColor: '#FFFFFF',
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
    width: '100%',
    height: 45,
  },
});
