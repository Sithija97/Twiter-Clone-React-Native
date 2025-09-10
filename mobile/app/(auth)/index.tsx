import { useSocialAuth } from "@/hooks/useSocialAuth";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { handleSocialAuth, isLoading } = useSocialAuth();
  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 px-8 justify-between">
        <View className="flex-1 justify-center">
          {/* demo image */}
          <View className="items-center">
            <Image
              source={require("../../assets/images/auth1.png")}
              className="size-96"
              resizeMode="contain"
            />
          </View>

          <View className="flex-col gap-2">
            <TouchableOpacity
              className="flex-row items-center justify-center bg-white border border-gray-300 rounded-full py-3 px-6"
              onPress={() => handleSocialAuth("oauth_google")}
              disabled={false}
            >
              <View className="flex-row items-center justify-center">
                <Image
                  source={require("../../assets/images/google.png")}
                  className="size-10 mr-3"
                  resizeMode="contain"
                />
                <Text className="text-black font-medium text-base">
                  Continue with Google
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center justify-center bg-white border border-gray-300 rounded-full py-3 px-6"
              onPress={() => handleSocialAuth("oauth_facebook")}
              disabled={false}
            >
              <View className="flex-row items-center justify-center">
                <Image
                  source={require("../../assets/images/facebook.png")}
                  className="size-10 mr-3"
                  resizeMode="contain"
                />
                <Text className="text-black font-medium text-base">
                  Continue with Facebook
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <Text className="text-center text-gray-500 text-xs leading-4 mt-6 px-2">
            By signing up, you agree to our{" "}
            <Text className="text-blue-500">Terms</Text>
            {", "}
            <Text className="text-blue-500">Privacy Policy</Text>
            {", and "}
            <Text className="text-blue-500">Cookie Use</Text>.
          </Text>
        </View>
      </View>
    </View>
  );
}
