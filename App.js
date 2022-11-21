// import React, {useState} from 'react';
import { StatusBar } from "expo-status-bar";

import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BorderWrite from "./screens/BorderWrite";
import Main from "./screens/Main";
import BorderPage from "./screens/BorderPage";

const Stack = createStackNavigator();

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="시작" screenOptions = {{ headerShown: false }}>
          {/* screenOptions 에서 headerShown : header bar 제거 */}
          <Stack.Screen name="메인" component={Main} />
          <Stack.Screen name="게시판보기" component={BorderPage} />
          <Stack.Screen name="게시판" component={BorderWrite} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
