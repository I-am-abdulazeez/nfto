import { useEffect, useState } from "react";
// Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Fonts
import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { loadAsync } from "expo-font";
import AppLoading from "expo-app-loading";

// Screens import
import HomeScreen from "./screens/Home";
import DetailsScreen from "./screens/Details";

import { StackParams } from "./types";
import { theme } from "./assets/theme";
import { NFTData } from "./constants";

const Stack = createStackNavigator<StackParams>();

const App: React.FC = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const fetchFonts = async () => {
    await loadAsync({
      Inter_300Light,
      Inter_400Regular,
      Inter_500Medium,
      Inter_600SemiBold,
      Inter_700Bold,
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    fetchFonts();
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
