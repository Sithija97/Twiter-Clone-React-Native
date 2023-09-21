import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export const Login = ({ navigation }: any) => {
  const handleRegister = () => {
    navigation.navigate("Register");
  };
  const handleLogin = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Button title="Login" onPress={handleLogin} />
      </>
      <Text style={styles.registerText}>
        Don't have an account?{" "}
        <Text style={styles.registerLink} onPress={handleRegister}>
          Register
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  registerText: {
    marginTop: 10,
    fontSize: 16,
  },
  registerLink: {
    color: "blue",
    textDecorationLine: "underline",
  },
  errorText: {
    color: "red", // You can change the color to your preferred error color
    fontSize: 14, // You can adjust the font size as needed
    marginTop: 5, // Add some spacing from the input field
  },
});
