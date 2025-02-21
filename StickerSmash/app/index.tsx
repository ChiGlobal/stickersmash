import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={{fontSize:25}}>Hi Expo App</Text>
      <Link href={"/about"} style={styles.button}> 
      Go to the About Screen </Link>
    </View>
  );
}

const styles = StyleSheet.create(
  {
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1faee",
  },
  text:{
    color:"#0e1116",
  },
  button:{  
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#0e1116',
  },
  }
);
