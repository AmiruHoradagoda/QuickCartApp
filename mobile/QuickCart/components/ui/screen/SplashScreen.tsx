import { COLORS } from "@/constants/CollorPallet";
import { useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Animated,
  Text,
  Dimensions,
  SafeAreaView,
} from "react-native";
import appJson from "../../../app.json";

export default function SplashScreen({ onFinish }: any) {
  const progress = useRef(new Animated.Value(0)).current;
  const logo = require("../../../assets/images/logo/logo.png");

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => onFinish());
  }, [onFinish]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoWrapper}>
          <Image source={logo} style={styles.logo} resizeMode={"contain"} />
        </View>
        <Text style={styles.tagline}>
          Shop Smart, Shop Fast - Your Store in Your Pocket
        </Text>
        <View style={styles.progressContainer}>
          <Animated.View
            style={[
              styles.progressbar,
              {
                width: progress.interpolate({
                  inputRange: [0, 100],
                  outputRange: ["0%", "100%"],
                }),
              },
            ]}
          />
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.versionText}>Version: {appJson.expo.version}</Text>
        <Text style={styles.fromText}>From: Developer Stack</Text>
      </View>
    </SafeAreaView>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoWrapper: {
    marginBottom: 20,
  },
  logo: {
    height: 80,
    width: width * 0.5, // Responsive width based on screen size
  },
  tagline: {
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 20,
    color: "#333",
  },
  progressContainer: {
    width: width * 0.8, // 80% of screen width
    height: 6,
    backgroundColor: COLORS.darkGray,
    overflow: "hidden",
    borderRadius: 5,
    marginTop: 10,
  },
  progressbar: {
    backgroundColor: COLORS.orange,
    borderRadius: 5,
    height: "100%",
  },
  bottom: {
    width: "100%",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",
  },
  versionText: {
    fontSize: 12,
    color: "#666",
  },
  fromText: {
    fontSize: 12,
    color: "#666",
  },
});
