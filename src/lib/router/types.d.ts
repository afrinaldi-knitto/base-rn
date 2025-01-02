import {NavigationProp} from '@react-navigation/native';

type RootStackParamList = {
  Login: undefined;
  Main: undefined;
};

type BottomTabParamList = {
  Home: undefined;
  Favorites: undefined;
  Profile: undefined;
};

type StackNavigation = NavigationProp<RootStackParamList>;
