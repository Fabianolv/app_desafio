import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ActivityIndicator,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({label, loading, ...rest}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#e41640',
        width: 300,
        height: 45,
        alignItems: 'center',
        borderRadius: 50,
        justifyContent: 'center',
        alignContent: 'center',
      }}
      {...rest}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text
          style={{
            display: 'flex',
            color: '#fff',
            textAlign: 'center',
          }}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
