import {BottomTab} from '../../lib/router/bottomRouter';
import React from 'react';
import HomePage from './home';
import FavoritesPage from './favorites';
import ProfilePage from './profile';
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

const MainPage = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        animation: 'shift',
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={FavoritesPage}
        options={{
          tabBarIcon: FavoritesIcon,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarIcon: ProfileIcon,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MainPage;
