import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabOneScreen from "./screens/TabOneScreen";
import TabTwoScreen from "./screens/TabTwoScreen";
import TabLayout from "./components/TabLayout";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TabLayout {...props} />}>
        <Tab.Screen name="Przepisy" component={TabOneScreen} />
        <Tab.Screen name="Ulubione" component={TabTwoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
