import { MainNavigatorParamList } from 'types/navigation';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import HomeNavigator from './HomeNavigator';
import StartupNavigator from './StartupNavigator';
import { useSelector } from 'react-redux';
import { selectUserCredentials } from 'store/selectors/userSelectors';
import { useRefreshToken } from 'lib/useRefreshToken';

const MainStack = createNativeStackNavigator<MainNavigatorParamList>();

const MainNavigator = () => {
  const credentials = useSelector(selectUserCredentials);
  const refreshToken = useRefreshToken();

  // Assume a production implementation uses a jwt with an expiration.
  // Need to decode the jwt and check exp. If expired then use the refreshToken to
  // obtain a new token from the server.
  //
  // This state guard simulates the token refresh.
  const [tokenIsExpired, setTokenIsExpired] = useState(true);
  if (tokenIsExpired) {
    refreshToken();
    setTokenIsExpired(false);
  }

  return (
    <MainStack.Navigator
      initialRouteName={credentials?.accessToken ? 'HomeStack' : 'StartupStack'}
    >
      <MainStack.Screen
        name="StartupStack"
        component={StartupNavigator}
        options={{
          headerShown: false,
          animation: 'none',
        }}
      />
      <MainStack.Screen
        name="HomeStack"
        component={HomeNavigator}
        options={{
          headerShown: false,
          animation: 'none',
        }}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
