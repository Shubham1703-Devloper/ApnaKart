import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Dialog, Portal, Provider, Text} from 'react-native-paper';

const DialogView = ({visible,buttontext, hideDialog, message, description,filter1, back}) => {
  return (
    <Portal>
           <Dialog visible={visible} onDismiss={hideDialog} style={styles.dilogView}>
             <Dialog.Title>{message}</Dialog.Title>
             <Dialog.Content>
               <Text variant="bodyMedium">{description}</Text>
             </Dialog.Content>
             <Dialog.Actions>
               <Button onPress={back}>{buttontext}</Button>
             </Dialog.Actions>
           </Dialog>
         </Portal>

  );
};

const styles = StyleSheet.create({
  dilogView: {
    borderRadius: 5,
  },
});

export default DialogView;
