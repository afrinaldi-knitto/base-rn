import React from 'react';
import {Modal, View, TouchableWithoutFeedback, StyleSheet} from 'react-native';

const Dialog: React.FC<IModal> = ({
  visible,
  onClose,
  children,
  dismissOnBackdropPress,
}) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={dismissOnBackdropPress ? onClose : undefined}>
          <View style={styles.backdrop} />
        </TouchableWithoutFeedback>
        <View style={styles.dialog}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default Dialog;
