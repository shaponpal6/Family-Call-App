import React from 'react'
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  MessengerScreen,
} from './src/screens'
import AudioCallScreen from './src/screens/AudioCallScreen';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text> HHHHHHH ....</Text>
    </View>
  );
}
export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <Stack.Navigator
          initialRouteName="Dashboard"
          screenOptions={{
            headerShown: false,
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
          }}
        >
          <Stack.Screen name="MessengerScreen" component={MessengerScreen} />
          <Stack.Screen name="AudioCallScreen" component={AudioCallScreen} />
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
         
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
