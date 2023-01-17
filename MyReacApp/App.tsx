import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';
import TodoDetailsScreen from './pages/TodoDetailsScreen';
import { Todo } from './features/todos/models/Todo';

export type RootStackParamList = {
  Home: undefined;
  TodoDetails: {
    todo: Todo;
  };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home screen',
          }}
        />
        <RootStack.Screen
          name="TodoDetails"
          component={TodoDetailsScreen}
          options={{
            title: 'Details',
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
