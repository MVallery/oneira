import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Card,
  Modal,
  Portal,
  Text,
  useTheme
} from 'react-native-paper';

import CustomButton from '@/components/ui/Button';

interface ModalConfirmProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  allowScrimClose?: boolean;
  hasUnsavedChanges?: boolean;
}

const ModalConfirm: React.FC<ModalConfirmProps> = ({
  visible,
  onClose,
  title = 'Unsaved Changes',
  children,
  allowScrimClose = true,
  hasUnsavedChanges = false,
}) => {
  const { colors } = useTheme();
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
      {/* "Are you sure?" confirmation */}
      <Modal visible={confirmClose} onDismiss={() => setConfirmClose(false)}>
        <View style={styles.modalContainer}>
          <Card style={styles.modal}>
            <Card.Title title={title} />
            <Card.Content>
              <Text>
                Are you sure you want to exit? Unsaved changes will be lost.
              </Text>
            </Card.Content>
            <Card.Actions>
              <CustomButton onPress={() => setConfirmClose(false)}>
                Cancel
              </CustomButton>
              <CustomButton onPress={onClose} type='secondary'>
                Exit
              </CustomButton>
            </Card.Actions>
          </Card>
        </View>
      </Modal>
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
  },
  modal: {
    width: '80%',
    padding: 16,
  },
});

export default ModalConfirm;
