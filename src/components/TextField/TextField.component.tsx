import React from 'react';
import {View, Text, TextInputProps, TextInput, Platform} from 'react-native';

interface TextFieldProps extends TextInputProps {
  label: string;
}

const TextField: React.FC<TextFieldProps> = ({label, ...inputProps}) => (
  <View style={{margin: 8}}>
    <Text>{label}</Text>
    <TextInput
      style={{
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
        paddingVertical: 8,
      }}
      {...inputProps}
    />
  </View>
);

export default TextField;
