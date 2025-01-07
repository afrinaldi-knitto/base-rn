import React, {memo} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

const RowTable: React.FC<IRowTable> = memo(
  ({item, index, headers, stylesConfig}) => {
    const {
      borderColor,
      borderWidth,
      textColor,
      rowBackgroundColor,
      rowAltBackgroundColor,
      columnWidth,
      padding,
      rowHeight,
    } = stylesConfig;

    const cellStyle = (width: number | 'auto') =>
      width === 'auto' ? {flex: 1} : {width};

    return (
      <View
        style={[
          styles.row,
          {
            backgroundColor:
              index % 2 === 0 ? rowBackgroundColor : rowAltBackgroundColor,
            height: rowHeight,
          } as StyleProp<ViewStyle>,
        ]}>
        {headers.map((header, colIndex) => (
          <Text
            key={`row-${index}-col-${colIndex}`}
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
            {item[header]}
          </Text>
        ))}
      </View>
    );
  },
);

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

export default RowTable;
