import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>Hi Expo App</Text>
    </View>
  );
}

const styles = StyleSheet.create(
  {
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1faee"
  },
  text:{
    color:"0e1116"
  }
  }
);
