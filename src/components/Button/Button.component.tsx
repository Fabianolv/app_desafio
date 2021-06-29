import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ActivityIndicator,
} from 'react-native';
import styles from './Button.styles';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, loading, ...rest }) => {
  return (
    <TouchableOpacity style={styles.root} {...rest}>
      {loading ? (
        <ActivityIndicator testID="loading" color="#fff" />
      ) : (
        <Text style={styles.label}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
