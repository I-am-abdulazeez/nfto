import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

// Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

// Fonts
import { useFonts } from "expo-font";

// Screens import
import HomeScreen from "./screens/Home";
import DetailsScreen from "./screens/Details";

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
