import { Text, SafeAreaView } from "react-native";
import React from "react";
import SignOutButton from "@/components/SignOutButton";

const Home = () => {
  return (
    <SafeAreaView className="flex-1">
      <Text>Home</Text>
      <SignOutButton />
    </SafeAreaView>
  );
};

export default Home;
