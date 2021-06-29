import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContext} from 'react-navigation';

import Username from '../components/Username/Username.component';

const SignIn: React.FC = () => {
  const {navigate} = useContext(NavigationContext);

  const navigationToSignUp = () => {
    navigate('SignUp');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Sign Up" onPress={navigationToSignUp} />
      <Text>SignIn</Text>
      <Username />
      <Button title=">" onPress={navigationToSignUp} />
    </View>
  );
};

export default SignIn;
