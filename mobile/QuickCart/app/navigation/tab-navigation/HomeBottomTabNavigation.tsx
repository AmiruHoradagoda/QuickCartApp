import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeBookmarkScreen from "@/components/ui/screen/home/HomeBookmarkScreen";
import HomeCartScreen from "@/components/ui/screen/home/HomeCartScreen";
import HomeMenuScreen from "@/components/ui/screen/home/HomeMenuScreen";
import HomePageScreen from "@/components/ui/screen/home/HomePageScreen";
import HomeProductsScreen from "@/components/ui/screen/home/HomeProductsScreen";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/CollorPallet";
const Tab = createBottomTabNavigator();

export default function HomeBottomTabNavigator({ navigation }: any) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }: any) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Bookmarks") {
            iconName = focused ? "bookmark" : "bookmark-outline";
          } else if (route.name === "Menu") {
            iconName = focused ? "menu" : "menu-outline";
          } else if (route.name === "Products") {
            iconName = focused ? "list" : "list-outline";
          }
          //@ts-ignore
          return <Ionicons name={iconName} size={size} color={color} />;
        }  ,
        tabBarActiveTintColor:COLORS.orange,
        tabBarInactiveTintColor: COLORS.darkGray, 
      })}
    >
      <Tab.Screen name="Menu" component={HomeMenuScreen} />
      <Tab.Screen name="Cart" component={HomeCartScreen} />
      <Tab.Screen name="Home" component={HomePageScreen} />
      <Tab.Screen name="Bookmarks" component={HomeBookmarkScreen} />
      <Tab.Screen name="Products" component={HomeProductsScreen} />
    </Tab.Navigator>
  );
}
