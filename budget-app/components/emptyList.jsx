import React from "react";
import { View, Text, Image } from "react-native";

const EmptyList = ({ message }) => {
  return (
    <View className="flex justify-center items-center my-5 space-y-3">
      <Image
        className="w-36 h-36"
        source={require("../assets/images/empty.png")}
      />
      <Text className="font-bold text-gray-400">
        {message || "data not found"}
      </Text>
    </View>
  );
};

export default EmptyList;
