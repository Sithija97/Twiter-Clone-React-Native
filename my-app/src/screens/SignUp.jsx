import React, { useState } from 'react';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';



export default SignUp = ({ navigation }) => {
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

  const signUp = async () => {
    const errorMessage = validate(value);
    if (errorMessage !== '') {
      setValue({ ...value, error: errorMessage });
      return
    }

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
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
      <Text>SignUp screen!</Text>
      {value.error && <View style={styles.error}><Text>{value.error}</Text></View>}
      <View style={styles.controls}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          containerStyle={styles.control}
          value={value.email}
          onChangeText={(text) => handleChange('email', text)}
        />

        <TextInput
          style={styles.input}
          placeholder='Password'
          containerStyle={styles.control}
          value={value.password}
          onChangeText={(text) => handleChange('password', text)}
          secureTextEntry={true}
        />

        <Button title="Sign up" buttonStyle={styles.control} onPress={signUp} />
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

  input: {
  },

  error: {
    marginTop: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#D54826FF',
  }
});