import { LoginAPIResponse } from 'types/user';
import mockLoginAPIResponse from 'mocks/mockLoginAPIResponse.json';
import CookieManager from '@react-native-cookies/cookies';
import { saveCredentials, saveProfile } from 'store/slices/user';
import { useDispatch } from 'react-redux';

const apiUrl = 'https://timetracker-api.experient.com';

const useProcessLogin = () => {
  const dispatch = useDispatch();

  return async (password: string, response: LoginAPIResponse) => {
    // Expect cookies accessToken, refreshToken.
    const cookies = await CookieManager.get(apiUrl);
    const credentials = {
      accessToken: cookies.accessToken?.value || 'mock-access-token',
      refreshToken: cookies.refreshToken?.value || 'mock-refresh-token',
      password,
    };

    console.log(`credentials = ${JSON.stringify(credentials)}`);
    console.log(`profile: ${JSON.stringify(response.user, null, 2)}`);

    if (credentials.accessToken) {
      dispatch(saveCredentials({ credentials }));
      dispatch(saveProfile({ profile: response.user }));
    }
    return !!credentials.accessToken;
  };
};

export const useLogin = () => {
  const processLogin = useProcessLogin();

  return async (username: string, password: string) => {
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    console.log(`Login response: ${JSON.stringify(response, null, 2)}`);

    let data;
    if (response.status === 200) {
      data = (await response.json()) as LoginAPIResponse;
    } else {
      data = mockLoginAPIResponse;
    }
    return processLogin(password, data);
  };
};
