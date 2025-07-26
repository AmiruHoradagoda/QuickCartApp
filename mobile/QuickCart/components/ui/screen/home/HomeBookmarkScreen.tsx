import { View, Text } from "react-native";

export default function HomeBookmarkScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Bookmark Screen</Text>
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
