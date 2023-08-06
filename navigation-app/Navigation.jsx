import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Pressable, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Feed from "./screens/tab-screens/Feed";
import Settings from "./screens/tab-screens/Settings";
import Notifications from "./screens/tab-screens/Notifications";

const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      // headerTitleAlign: "center",
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === "Feed") {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === "Settings") {
          iconName = focused ? "settings" : "ios-settings-sharp";
        } else if (route.name === "Notifications") {
          iconName = focused ? "ios-notifications" : "notifications-outline";
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#1DA1F2",
      tabBarInactiveTintColor: "gray",
    })}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  const theme = useColorScheme();
  return (
    <NavigationContainer theme={theme === "light" ? DarkTheme : DefaultTheme}>
      <TabGroup />
    </NavigationContainer>
  );
}
