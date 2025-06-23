import { NavigatorScreenParams } from '@react-navigation/core';

export type MainNavigatorParamList = {
  HomeStack: NavigatorScreenParams<HomeNavigatorParamList>;
  StartupStack: NavigatorScreenParams<StartupNavigatorParamList>;
};

export type HomeNavigatorParamList = {
  Home: undefined;
};

export type StartupNavigatorParamList = {
  Welcome: undefined;
};
