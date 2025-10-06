import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import DetailScreen from './screens/DetailScreen';
import AddDishScreen from './screens/AddDishScreen';
import FilterScreen from './screens/FilterScreen';

export type RootStackParamList = {
  Home: undefined;
  Menu: undefined;
  Detail: { dish: Dish };
  AddDish: undefined;
  Filter: undefined;
};

export type Dish = {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  course: 'starter' | 'main' | 'dessert';
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="AddDish" component={AddDishScreen} />
        <Stack.Screen name="Filter" component={FilterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}