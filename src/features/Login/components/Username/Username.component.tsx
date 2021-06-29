import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationParams, NavigationScreenProp} from 'react-navigation';

import TextField from '../../../../components/TextField/TextField.component';

interface UsernameProps {
  navigation?: NavigationScreenProp<any, NavigationParams>;
}

const Username: React.FC<UsernameProps> = ({navigation}) => {
  return (
    <View>
      <TextField label="Usuario" />
    </View>
  );
};

export default Username;
