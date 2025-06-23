import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import WelcomeScreen from 'components/WelcomeScreen';
import { StartupNavigatorParamList } from 'types/navigation';

const StartupStack = createNativeStackNavigator<StartupNavigatorParamList>();

const StartupNavigator = () => {
  return (
    <StartupStack.Navigator
      initialRouteName={'Welcome'}
      screenOptions={{
        title: undefined,
      }}
    >
      <StartupStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
    </StartupStack.Navigator>
  );
};

export default StartupNavigator;
