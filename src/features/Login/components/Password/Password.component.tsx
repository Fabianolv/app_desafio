import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationParams, NavigationScreenProp} from 'react-navigation';

import TextField from '../../../../components/TextField/TextField.component';

interface PasswordProps {
  navigation?: NavigationScreenProp<any, NavigationParams>;
}

const Password: React.FC<PasswordProps> = ({navigation}) => {
  return (
    <View>
      <TextField label="Senha" />
    </View>
  );
};

export default Password;
