import React, {useContext} from 'react';
import {View} from 'react-native';
import {NavigationContext} from 'react-navigation';

import TextField from '../../../components/TextField/TextField.component';
import Button from '../../../components/Button/Button.component';

const SignUp: React.FC = () => {
  const {navigate} = useContext(NavigationContext);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
      }}>
      <View style={{width: '100%', justifyContent: 'center', flex: 1}}>
        <TextField label="Usuario" />
        <TextField label="Senha" />
        <TextField label="Confirme sua senha" />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Button activeOpacity={0.8} label="Cadastrar" loading={false} />
      </View>
    </View>
  );
};

export default SignUp;
