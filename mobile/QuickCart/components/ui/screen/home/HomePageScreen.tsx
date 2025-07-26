import { View, Text } from "react-native";

export default function HomePageScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Page Screen</Text>
    </View>
  );
}

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
