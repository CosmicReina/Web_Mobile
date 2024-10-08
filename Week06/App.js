import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ItemScreen from "./screens/ItemScreen";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"ItemScreen"} component={ItemScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
