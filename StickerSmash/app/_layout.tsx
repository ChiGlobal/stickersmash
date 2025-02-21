import { Stack } from "expo-router";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
 <Stack>
  <Stack.Screen name="(tabs)" options={{headerShown: false, headerTitleAlign: "center", headerLeft:() =><></>}} />
  <Stack.Screen name="+not-found" options={{headerShown:false}} />
 </Stack>
  );
}
