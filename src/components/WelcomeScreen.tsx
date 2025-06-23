import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  MainNavigatorParamList,
  StartupNavigatorParamList,
} from 'types/navigation';
import { CompositeScreenProps } from '@react-navigation/native';
import { useLogin } from 'lib/useLogin';

export type Props = CompositeScreenProps<
  NativeStackScreenProps<StartupNavigatorParamList, 'Welcome'>,
  NativeStackScreenProps<MainNavigatorParamList>
>;

const WelcomeScreen = ({ navigation }: Props) => {
  const login = useLogin();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const disabled = !username.length || !password.length;

  const submitLogin = async () => {
    const success = await login(username, password);
    if (success) {
      navigation.navigate('HomeStack', { screen: 'Home' });
    }
  };

  return (
    <View style={s.container}>
      <Text style={s.title}>{'Welcome to Experient!'}</Text>
      <View style={s.form}>
        <TextInput
          style={s.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={s.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Pressable
          style={({ pressed }) => [
            s.button,
            pressed || disabled ? s.buttonPressed : {},
          ]}
          disabled={disabled}
          onPress={submitLogin}
        >
          <Text style={s.buttonText}>{'Login'}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#007bff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    backgroundColor: '#007bff40',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  container: {
    alignItems: 'center',
    height: '100%',
  },
  form: {
    alignItems: 'center',
    width: '70%',
    position: 'absolute',
    top: '40%',
  },
  input: {
    width: '100%',
    height: 40,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    position: 'absolute',
    top: '20%',
  },
});

export default WelcomeScreen;
