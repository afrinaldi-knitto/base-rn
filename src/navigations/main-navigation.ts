import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import LoginScreen from '../screens/login';
import MainScreen from '../screens/main';
import {createStaticNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator<RootStackParamList>({
  screens: {
    Login: LoginScreen,
    Main: MainScreen,
  },
  screenOptions: {
    headerShown: false,
  },
});

export const MainNavigation = createStaticNavigation(Stack);
