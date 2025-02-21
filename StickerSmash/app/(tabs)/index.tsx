import { Text, View, StyleSheet } from "react-native";
import ImageViewer from "@/components/imageViewer";

const PlaceholderImage = require('../../assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}><ImageViewer imgSource={PlaceholderImage} /></View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
  container:{
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f1faee",
  },
  imageContainer: {
    flex: 1
  }
  }
);
