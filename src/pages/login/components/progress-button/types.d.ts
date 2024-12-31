interface IProgressButton {
  isLoading: boolean;
  onPress: (...event: any[]) => void;
  text: string;
}
