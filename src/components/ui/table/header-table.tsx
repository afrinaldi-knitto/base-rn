import React, {memo} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';

const HeaderTable: React.FC<IHeaderTable> = memo(({headers, stylesConfig}) => {
  const {
    borderColor,
    borderWidth,
    textColor,
    headerBackgroundColor,
    columnWidth,
    padding,
  } = stylesConfig;

  const cellStyle = (width: number | 'auto') =>
    width === 'auto' ? {flex: 1} : {width};

  return (
    <View style={[styles.row, {backgroundColor: headerBackgroundColor}]}>
      {headers.map((header, index) => (
        <Text
          key={`header-${index}`}
          style={[
            styles.cell,
            cellStyle(columnWidth),
            {
              borderColor,
              borderWidth,
              color: textColor,
              padding,
            } as StyleProp<TextStyle>,
          ]}>
          {header}
        </Text>
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  cell: {
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
});

export default HeaderTable;
