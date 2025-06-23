import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLogout } from 'lib/useLogout';
import React, { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {
  HomeNavigatorParamList,
  MainNavigatorParamList,
} from 'types/navigation';

export type Props = CompositeScreenProps<
  NativeStackScreenProps<HomeNavigatorParamList, 'Home'>,
  NativeStackScreenProps<MainNavigatorParamList>
>;

const HomeScreen = ({ navigation }: Props) => {
  const logout = useLogout();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable onPress={submitLogout}>
            <Text style={s.buttonText}>{'Logout'}</Text>
          </Pressable>
        );
      },
    });
  }, []);

  const submitLogout = async () => {
    const success = await logout();
    if (success) {
      navigation.navigate('StartupStack', { screen: 'Welcome' });
    }
  };

  return (
    <View style={s.container}>
      <Text style={s.message1}>{"There's nothing here to see..."}</Text>
      <Text style={s.message2}>{'but you can logout and do it again!'}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  buttonText: {
    color: '#007bff',
    fontSize: 16,
  },
  container: {
    alignItems: 'center',
    height: '100%',
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
  },
  input: {
    width: '100%',
    height: 40,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  message1: {
    fontSize: 16,
    marginTop: 50,
  },
  message2: {
    fontSize: 14,
    marginTop: 10,
    color: '#777777',
  },
});

export default HomeScreen;
