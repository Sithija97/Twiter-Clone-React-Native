import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { RootState, useAppSelector } from "../store/store";

export const Home = ({ navigation }: any) => {
  const auth = useAppSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Welcome ${auth.user?.name}`}</Text>
      <Button title="Logout" onPress={handleLogout} />
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
});
