interface ITable {
  data: Array<Record<string, any>>;
  headers: string[];
  stylesConfig?: StylesConfig;
  enableHorizontalScroll?: boolean;
}

interface IHeaderTable {
  headers: string[];
  stylesConfig: Required<StylesConfig>;
}

interface IRowTable {
  item: Record<string, any>;
  index: number;
  headers: string[];
  stylesConfig: Required<StylesConfig>;
}

interface StylesConfig {
  borderColor?: string;
  borderWidth?: number;
  textColor?: string;
  headerBackgroundColor?: string;
  rowBackgroundColor?: string;
  rowAltBackgroundColor?: string;
  padding?: number;
  rowHeight?: number;
  columnWidth?: number | 'auto';
}
