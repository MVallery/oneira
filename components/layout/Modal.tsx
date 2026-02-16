import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  IconButton,
  Modal,
  Portal,
  Text
} from 'react-native-paper';

import { useAppTheme } from '@/state/themeContext';
import ModalConfirm from './ModalConfirm';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  allowScrimClose?: boolean;
  hasUnsavedChanges?: boolean;
  height?: number;
  style?: any;
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  title = 'Modal Title',
  children,
  allowScrimClose = true,
  hasUnsavedChanges = false,
  height = 450,
  style,
}) => {
  const { theme } = useAppTheme();
  const { colors } = theme;
  const [confirmClose, setConfirmClose] = useState(false);

  const handleClose = () => {
    if (hasUnsavedChanges) {
      setConfirmClose(true);
    } else {
      onClose();
    }
  };

  return (
    <Portal>
      {/* <TouchableWithoutFeedback onPress={allowScrimClose ? handleClose : undefined}>
          <View style={styles.scrim} />
        </TouchableWithoutFeedback> */}
      <Modal dismissable={false} visible={visible} onDismiss={handleClose}>
        <View style={styles.modalContainer}>
          <View
            style={[
              styles.modal,
              { minHeight: height, backgroundColor: colors.background },
              style ? style : {},
            ]}
          >
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
              <IconButton
                icon='close'
                onPress={handleClose}
                accessibilityLabel='Close modal'
              />
            </View>
            {/* <Card.Title title={title} right={() => <IconButton icon="close" onPress={handleClose} accessibilityLabel="Close modal" />} /> */}
            <View>{children}</View>
          </View>
        </View>
      </Modal>
      <ModalConfirm
        visible={confirmClose}
        onClose={() => {
          setConfirmClose(false);
          onClose();
        }}
      ></ModalConfirm>
      {/* "Are you sure?" confirmation
      <Modal visible={confirmClose} onDismiss={() => setConfirmClose(false)}>
        <View style={styles.modalContainer}>
          <Card style={styles.modal}>
            <Card.Title title="Unsaved Changes" />
            <Card.Content>
              <Text>Are you sure you want to exit? Unsaved changes will be lost.</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => setConfirmClose(false)}>Cancel</Button>
              <Button onPress={onClose} mode="contained" color={colors.error}>
                Exit
              </Button>
            </Card.Actions>
          </Card>
        </View>
      </Modal> */}
    </Portal>
  );
};

const styles = StyleSheet.create({
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    width: '100%',
    padding: 16,
  },
  modal: {
    // width: '80%',
    padding: 16,
    height: '90%',
    backgroundColor: 'black',
    width: '100%',
    maxWidth: 500,
    minHeight: 450, // cant figure out why it wont expand to fit items without this explicit height.
    borderRadius: 8,
  },
});

export default CustomModal;
