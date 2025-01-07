interface IFormTextInput {
  placeholder: string;
  value: string;
  autoFocus?: boolean;
  secureTextEntry?: boolean;
  onChange: (...event: any[]) => void;
  returnKeyType?: 'next' | 'done' | 'go' | 'search' | 'send';
  iconSource?: any;
}
