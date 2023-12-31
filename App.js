import React, { useState } from "react";
import { StyleSheet, View, ImageBackground } from 'react-native';
// import {Text, Input} from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigation/stack";


export default function App() {
 return(
  <NavigationContainer>
    <Navigator/>
  </NavigationContainer>
 )
}
