import React, { useContext } from 'react';
import { Image, View } from 'react-native';
import { NavigationContext } from 'react-navigation';
import TextField from '../../../components/TextField/TextField.component';
import Button from '../../../components/Button/Button.component';
import styles from './SignIn.styles';

const SignIn: React.FC = () => {
  const { navigate } = useContext(NavigationContext);

  const navigationToSignUp = () => {
    navigate('SignUp');
  };

  const login = () => {
    console.log('oe');
  }

  return (
    <View style={styles.root}>
      <View>
        <Image
          style={styles.image}
          source={{uri: 'https://logos-download.com/wp-content/uploads/2018/01/CIT_logo_RGB.png'}}
        />
      </View>
      <View style={styles.content}>
        <TextField label="Usuario" />
        <TextField secureTextEntry label="Senha" />
      </View>
      <View style={styles.buttonLogin}>
        <Button
          activeOpacity={0.8}
          label="Login"
          loading={false}
          onPress={() => login()}
        />
      </View>
      <View style={styles.button}>
        <Button
          activeOpacity={0.8}
          label="Cadastrar"
          loading={false}
          onPress={() => navigationToSignUp()}
        />
      </View>
    </View>
  );
};

export default SignIn;
