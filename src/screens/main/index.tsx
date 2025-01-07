import {BottomTab} from '../../navigation/bottom-navigation';
import React from 'react';
import HomeScreen from './home';
import FavoritesScreen from './favorites';
import ProfileScreen from './profile';
import {Heart, House, User} from 'lucide-react-native';

const HomeIcon = ({color, size}: {color: string; size: number}) => (
  <House color={color} size={size} />
);

const FavoritesIcon = ({color, size}: {color: string; size: number}) => (
  <Heart color={color} size={size} />
);

const ProfileIcon = ({color, size}: {color: string; size: number}) => (
  <User color={color} size={size} />
);

const MainScreen = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        animation: 'shift',
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: FavoritesIcon,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ProfileIcon,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MainScreen;
