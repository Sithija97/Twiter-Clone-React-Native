import React from "react";
import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { colors } from "../theme";
import BackButton from "../components/backButtonn";

const AddTripScreen = () => {
  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full">
        <View>
          <View className="relative mt-5">
            <View className="absolute top-0 left-4 z-10">
              <BackButton />
            </View>
            <Text className={`${colors.heading} text-xl font-bold text-center`}>
              Add Trip
            </Text>
          </View>
          <View className="flex-row justify-center my-3 mt-5">
            <Image
              className="h-72 w-72"
              source={require("../assets/images/4.png")}
            />
          </View>
          <View className="space-y-2 mx-5">
            <Text className={`${colors.heading} text-lg font-bold`}>
              Where On Earth?
            </Text>
            <TextInput className="p-4 bg-white rounded-full mb-3" />
            <Text className={`${colors.heading} text-lg font-bold`}>
              Which Country
            </Text>
            <TextInput className="p-4 bg-white rounded-full mb-3" />
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{ backgroundColor: colors.button }}
            className="my-6 rounded-full p-3 shadow-sm mx-2"
          >
            <Text className="text-center text-white text-lg font-bold">
              Add Trip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default AddTripScreen;
