import { View, Text } from "react-native";

export default function HomeManuScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Menu Screen</Text>
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
