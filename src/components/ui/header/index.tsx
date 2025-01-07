import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Header: React.FC<IHeader> = ({
  title,
  leadingIcon,
  leadingOnPress = () => {},
  trailingIcon,
  trailingOnPress = () => {},
  paddingHorizontal = 16,
  paddingVertical = 16,
}) => {
  return (
    <View style={[styles.container, {paddingHorizontal, paddingVertical}]}>
      <TouchableOpacity onPress={leadingOnPress} style={styles.iconWrapper}>
        {leadingIcon}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={trailingOnPress} style={styles.iconWrapper}>
        {trailingIcon}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    backgroundColor: '#4286ED',
  },
  iconWrapper: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default Header;
