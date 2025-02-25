import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function TabsLayout() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
 <Tabs 
    screenOptions={{
        tabBarActiveTintColor:"#0e1116",
        headerStyle: {
            backgroundColor: '#f1faee',
          },
          headerShadowVisible: false,
          headerTintColor: '#0e1116',
          tabBarStyle: {
          backgroundColor: '#f1faee',
          },
    }}
 >
  <Tabs.Screen name="index" options={{headerTitle: "Sticker Smash", headerTitleAlign: "center",
    tabBarIcon: ({focused, color}) => <Ionicons name={focused? "home-sharp" : "home-outline"} color={color} size={25}/>}} />
  <Tabs.Screen name="about"
  options={{
    headerTitle:"About", headerTitleAlign: "center", 
    tabBarIcon: ({focused, color}) => <Ionicons name={focused? "information-circle" : "information-circle-outline"} color={color} size={25}/>}}/>
  <Tabs.Screen name="+not-found" options={{headerShown:false}} />
 </Tabs>
 </GestureHandlerRootView>
  );
}
