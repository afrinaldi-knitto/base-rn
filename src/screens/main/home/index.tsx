import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, View} from 'react-native';
import {StackNavigation} from '../../../navigations/types';

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigation>();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="To Detail" onPress={() => {}} />
    </View>
  );
};

export default HomeScreen;
