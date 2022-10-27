import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home'
import ChatList from './screens/ChatList';
import Chat from './screens/Chat';
import Login from './screens/Login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="ChatList" component={ChatList} options={{title: 'Chat List'}}/>
        <Stack.Screen name="Chat" component={Chat} options={{title: 'Chat'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


