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

  const signUp = async () => {
    if (!value.email || !value.password) {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      });
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
      {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}
      <View style={styles.controls}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          containerStyle={styles.control}
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
          leftIcon={<Icon
            name='envelope'
            size={16}
          />}
        />

        <TextInput
          style={styles.input}
          placeholder='Password'
          containerStyle={styles.control}
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry={true}
          leftIcon={<Icon
            name='key'
            size={16}
          />}
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