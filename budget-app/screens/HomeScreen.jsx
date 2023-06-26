import React from "react";
import { Image, Text, View, TouchableOpacity, FlatList } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { colors } from "../theme";
import randomImage from "../assets/images/randomImage";
import EmptyList from "../components/emptyList";
import { useNavigation } from "@react-navigation/native";

const items = [
  { id: 1, place: "London bridge", country: "England" },
  { id: 2, place: "Washington DC", country: "America" },
  { id: 3, place: "Cruger NP", country: "Africa" },
  { id: 4, place: "Wilpaththu NP", country: "Sri Lanka" },
  { id: 5, place: "Cruger NP", country: "Africa" },
  { id: 6, place: "Wilpaththu NP", country: "Sri Lanka" },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper className="flex-1">
      <View className="flex-row justify-between items-center p-4">
        <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>
          Expensify
        </Text>
        <TouchableOpacity className="p-2 px-3 bg-white border-gray-200 rounded-full">
          <Text className={colors.heading}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image
          source={require("../assets/images/banner.png")}
          className="w-60 h-60"
        />
      </View>
      <View className="px-4 space-y-3">
        <View className="flex-row justify-between items-center">
          <Text className={`${colors.heading} font-bold text-xl`}>
            Recent Trips
          </Text>
          <TouchableOpacity
            className="p-2 px-3 bg-white border-gray-200 rounded-full"
            onPress={() => navigation.navigate("AddTrip")}
          >
            <Text className={colors.heading}>Add Trips</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 430 }}>
          <FlatList
            data={[]}
            numColumns={2}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={
              <EmptyList message={"You have not recorded any trips yet"} />
            }
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
            className="mx-1"
            renderItem={({ item }) => {
              return (
                <TouchableOpacity className="bg-white p-3 rounded-2xl mb-3 shadow-sm">
                  <View>
                    <Image source={randomImage()} className="w-36 h-36 mb-2" />
                    <Text className={`${colors.heading} font-bold`}>
                      {item.place}
                    </Text>
                    <Text className={`${colors.heading} text-xs`}>
                      {item.country}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;
