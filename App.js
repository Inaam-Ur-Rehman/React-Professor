import React from 'react';
import LoginScreen from './Screens/LoginScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from "./Screens/HomeScreen";
import SubjectScreen from "./Screens/SubjectScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#1c73d3',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 20,
        },
        headerTitleAlign: {
          textAlign: 'center',
        }
      }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Subject" component={SubjectScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
