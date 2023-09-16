import React, { memo, useState } from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


interface Props {
    handleConfirm: (date: Date) => void;
    hideDatePicker: () => void;
    isVisible?: boolean;
    mode?: any;
  }

  const CustomDatePicker : React.FC<Props> = ({
    handleConfirm,
    hideDatePicker,
    mode,
    isVisible,
    ...rest
}) => {

  return (
    <View>
      {/* <DateTimePickerModal
        isVisible={isVisible}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      /> */}

     
      
     </View>
  );
};



export default CustomDatePicker;