type IHeader = {
  title: string;
  leadingIcon?: React.ReactNode;
  leadingOnPress?: (...event: any[]) => void;
  trailingIcon?: React.ReactNode;
  trailingOnPress?: (...event: any[]) => void;
  paddingHorizontal?: number;
  paddingVertical?: number;
};
