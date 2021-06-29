import React, { useContext } from 'react';
import { View } from 'react-native';
import { NavigationContext } from 'react-navigation';

import TextField from '../../../components/TextField/TextField.component';
import Button from '../../../components/Button/Button.component';
import styles from './SignUp.styles';

const SignUp: React.FC = () => {
  const { navigate } = useContext(NavigationContext);

  const onSubmit = () => {
    navigate('SignIn');
  };

  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <TextField label="Usuario" />
        <TextField secureTextEntry label="Senha" />
        <TextField secureTextEntry label="Confirme sua senha" />
      </View>
      <View style={styles.button}>
        <Button
          activeOpacity={0.8}
          label="Cadastrar"
          loading={false}
          onPress={() => onSubmit()}
        />
      </View>
    </View>
  );
};

export default SignUp;
