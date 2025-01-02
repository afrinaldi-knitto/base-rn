import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import LoginPage from '../../pages/login';
import MainPage from '../../pages/main';
import {createStaticNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator<RootStackParamList>({
  screens: {
    Login: LoginPage,
    Main: MainPage,
  },
  screenOptions: {
    headerShown: false,
  },
});

export const MainRouter = createStaticNavigation(Stack);
