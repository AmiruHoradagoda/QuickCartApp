import HomeBookmarkScreen from "@/components/ui/screen/home/HomeBookmarkScreen";
import HomeCartScreen from "@/components/ui/screen/home/HomeCartScreen";
import HomeMenuScreen from "@/components/ui/screen/home/HomeMenuScreen";
import HomePageScreen from "@/components/ui/screen/home/HomePageScreen";
import HomeProductsScreen from "@/components/ui/screen/home/HomeProductsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

const Tab = createBottomTabNavigator();
export default function HomeBottomTabNavigaor({ {navigation}:any}) {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Menu"
                component={HomeMenuScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Cart"
                component={HomeCartScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Home"
                component={HomePageScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Bookmarks"
                component={HomeBookmarkScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Products"
                component={HomeProductsScreen}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
}