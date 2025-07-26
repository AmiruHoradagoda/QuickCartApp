import { View, Text } from "react-native";

export default function HomeCartScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Cart Screen</Text>
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
