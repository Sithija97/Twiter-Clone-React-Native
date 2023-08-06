import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import TweetContent from "../../components/TweetContent";

const TweetDetailsScreen = () => {
  const navigation = useNavigation();
  const router = useRoute();
  const { params } = router;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.tweet.author.name,
    });
  }, []);

  return (
    <View>
      <TweetContent tweet={params.tweet} />
    </View>
  );
};

export default TweetDetailsScreen;
