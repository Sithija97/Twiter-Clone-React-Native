import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, Pressable, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Feed from "./screens/tab-screens/Feed";
import Settings from "./screens/tab-screens/Settings";
import Notifications from "./screens/tab-screens/Notifications";
import TweetDetailsScreen from "./screens/homeStack-screens/TweetDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Payments from "./screens/drawer-screens/Payments";

// Stack
const HomeStack = createStackNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator
      screenOptions={({ route }) => ({ headerTitleAlign: "center" })}
    >
      <HomeStack.Screen
        name="TabGroup"
        component={TabGroup}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="TweetDetailsScreen"
        component={TweetDetailsScreen}
        // options={{ presentation: "modal" }}
      />
    </HomeStack.Navigator>
  );
}

// Tab Bottom
const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: "center",
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
      })}
    >
      {/* <Tab.Screen
        name="HomeStackGroup"
        component={HomeStackGroup}
        options={{ headerShown: false, tabBarLabel: "Feed" }}
      /> */}
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}

// Drawer
const Drawer = createDrawerNavigator();

function DrawerGroup() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="HomeStackGroup"
        component={HomeStackGroup}
      ></Drawer.Screen>
      <Drawer.Screen name="Payments" component={Payments}></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  const theme = useColorScheme();
  return (
    <NavigationContainer theme={theme === "light" ? DarkTheme : DefaultTheme}>
      <DrawerGroup />
    </NavigationContainer>
  );
}
