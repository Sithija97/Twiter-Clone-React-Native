import React from "react";
import { Text, View } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { colors } from "../theme";

const HomeScreen = () => {
  return (
    <ScreenWrapper className="flex-1">
      <View>
        <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>
          Expensify
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;
