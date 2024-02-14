import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Przepisy") {
            iconName = "utensils";
          } else if (route.name === "Ulubione") {
            iconName = "heart";
          }

          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Przepisy" component={TabOneScreen} />
      <Tab.Screen name="Ulubione" component={TabTwoScreen} />
    </Tab.Navigator>
  );
}
