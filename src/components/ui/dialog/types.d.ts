interface IModal {
  visible: boolean;
  onClose: () => void;
  children?: ReactNode;
  dismissOnBackdropPress?: boolean;
}
