import React, { useState } from 'react';
import { Input, Button, Icon } from 'react-native-elements';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


export default SignIn = () => {
  const initialState = {
    email: '',
    password: '',
    error: ''
  }
  const [value, setValue] = useState(initialState)
  const auth = getAuth();

  const handleChange = (key, value) => {
    setValue(prevState => ({
      ...prevState,
      [key]: value
    }));
  }

  const validate = (value) => {
    if (!value.email || !value.password) {
      return 'Email and password are mandatory.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email)) {
      return 'Please enter a valid email address.';
    }

    if (value.password.length < 6) {
      return 'Password must be at least 6 characters.';
    }

    return '';
  }

  const signIn = async () => {
    if (!value.email || !value.password) {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      });
      return
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate('Sign In');
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      })
    }
  }

  return (
    <View style={styles.container}>
      <Text>Signin screen!</Text>

      {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}

      <View style={styles.controls}>
        <TextInput
          placeholder='Email'
          containerStyle={styles.control}
          value={value.email}
          onChangeText={(text) => handleChange('email', text)}
        />

        <TextInput
          placeholder='Password'
          containerStyle={styles.control}
          value={value.password}
          onChangeText={(text) => handleChange('password', text)}
          secureTextEntry={true}
        />

        <Button title="Sign in" buttonStyle={styles.control} onPress={signIn} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',

    justifyContent: 'center',
  },

  controls: {
    flex: 1,
  },

  control: {
    marginTop: 10
  },

  error: {
    marginTop: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#D54826FF',
  }
});