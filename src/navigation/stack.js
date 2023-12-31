import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../Screens/Login';
import CadastroScreen from '../Screens/Cadastro';
import HomeScreen from '../Screens/Home';
import TabScreen from './tabNavigator';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Cadastro" component={CadastroScreen}/>
        <Stack.Screen name="Home" component={TabScreen}/>
        
    </Stack.Navigator>
  )
}

export default Navigator