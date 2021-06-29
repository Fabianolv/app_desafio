import React from 'react';
import { View, Text, TextInputProps, TextInput } from 'react-native';
import styles from './TextField.styles';

interface TextFieldProps extends TextInputProps {
  label: string;
}

const TextField: React.FC<TextFieldProps> = ({ label, ...inputProps }) => (
  <View style={styles.root}>
    <Text>{label}</Text>
    <TextInput style={styles.input} {...inputProps} />
  </View>
);

export default TextField;
