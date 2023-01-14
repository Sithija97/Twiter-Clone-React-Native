import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Add from "../screens/Add";
import Update from "../screens/Update";

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Add" component={Add} options={{ presentation: 'modal' }} />
            <Stack.Screen name="Update" component={Update} options={{ presentation: 'modal' }} />
        </Stack.Navigator>
    )
}

export default Navigation = () => {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}