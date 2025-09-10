import React from "react";
import { useClerk } from "@clerk/clerk-expo";
import { Button, Text, View } from "react-native";

const Home = () => {
  const { signOut } = useClerk();
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={() => signOut()} title=">logout" />
    </View>
  );
};

export default Home;
