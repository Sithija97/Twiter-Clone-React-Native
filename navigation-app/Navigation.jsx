import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./screens/Feed";

const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Feed} />
      <Tab.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
}
