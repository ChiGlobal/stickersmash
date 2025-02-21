import { Stack } from "expo-router";
import { LogBox, StatusBar } from "react-native";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <>
    <StatusBar barStyle={"dark-content"} backgroundColor={"#f1faee"}/>
 <Stack>
  <Stack.Screen name="(tabs)" options={{headerShown: false, headerTitleAlign: "center"}} />
  <Stack.Screen name="+not-found" options={{headerShown:false}} />
 </Stack></>
  );
}
