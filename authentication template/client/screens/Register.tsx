import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { registerData } from "../services/auth-service";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import localStorage from "react-native-expo-localstorage";
import { register } from "../store/auth/authSlice";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const Register = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const handleLogin = () => {
    navigation.navigate("Login");
  };
  const handleRegister = async ({ name, email, password }: registerData) => {
    try {
      const user = {
        name,
        email,
        password,
      };
      dispatch(register(user)).then(
        (data) =>
          data.meta.requestStatus === "fulfilled" &&
          navigation.navigate("Login")
      );
    } catch (error) {
      console.log("registration error :", error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
            />
            {touched.name && errors.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <Button
              title="Register"
              disabled={!isValid}
              onPress={() => handleRegister(values)}
            />
          </>
        )}
      </Formik>
      <Text style={styles.registerText}>
        Already have an account?{" "}
        <Text style={styles.registerLink} onPress={handleLogin}>
          Login
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
