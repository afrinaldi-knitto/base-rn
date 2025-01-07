import React, {memo, useMemo, useCallback} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import RowTable from './row-table';
import HeaderTable from './header-table';

const defaultStylesConfig: Required<StylesConfig> = {
  borderColor: '#ccc',
  borderWidth: 1,
  textColor: '#000',
  headerBackgroundColor: '#f0f0f0',
  rowBackgroundColor: '#fff',
  rowAltBackgroundColor: '#f9f9f9',
  padding: 10,
  rowHeight: 50,
  columnWidth: 100,
};

const Table: React.FC<ITable> = memo(
  ({
    data = [],
    headers = [],
    stylesConfig = {},
    enableHorizontalScroll = false,
  }) => {
    const mergedStylesConfig = useMemo(() => {
      return {
        ...defaultStylesConfig,
        ...stylesConfig,
        columnWidth: enableHorizontalScroll
          ? defaultStylesConfig.columnWidth
          : 'auto',
      };
    }, [stylesConfig, enableHorizontalScroll]);

    const renderItem = useCallback(
      ({item, index}: {item: Record<string, any>; index: number}) => (
        <RowTable
          item={item}
          index={index}
          headers={headers}
          stylesConfig={mergedStylesConfig}
        />
      ),
      [headers, mergedStylesConfig],
    );

    const content = (
      <View style={[styles.table, !enableHorizontalScroll && {flex: 1}]}>
        <HeaderTable headers={headers} stylesConfig={mergedStylesConfig} />
        <FlashList
          data={data}
          renderItem={renderItem}
          keyExtractor={(_, index) => `row-${index}`}
          estimatedItemSize={mergedStylesConfig.rowHeight}
        />
      </View>
    );

    return enableHorizontalScroll ? (
      <ScrollView horizontal>{content}</ScrollView>
    ) : (
      content
    );
  },
);

const styles = StyleSheet.create({
  table: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default Table;
