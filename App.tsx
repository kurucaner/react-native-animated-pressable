import { PressableAnimated } from "./src/components/PressableAnimated";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <PressableAnimated
        bounce
        customStyles={styles.customStyles}
        scaleValue={1.2}
        onPress={() => {
          console.log("onPress");
        }}
        onPressIn={() => {
          console.log("onPressIn");
        }}
        onPressOut={() => {
          console.log("onPressOut");
        }}
      >
        <Text style={styles.text}>App</Text>
      </PressableAnimated>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  customStyles: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#071D38",
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
