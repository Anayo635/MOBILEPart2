import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./App";

export type Dish = {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type MenuScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Menu'>;
export type DetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Detail'>;