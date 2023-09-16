
import React from "react";
import { View, Text } from "react-native";
import { Button } from 'react-native-paper';
import { SafeAreaProvider } from "react-native-safe-area-context";
import CalendarPicker from 'react-native-calendar-picker';


interface Props {
  params?: any
}

const DateGen: React.FC<Props> = () => {
  const [date, setDate] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params: any) => {
      setOpen(false);

      setDate(params.date);
    },
    [setOpen, setDate]
  );

  return (
    <SafeAreaProvider>
      <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
          Pick single date
        </Button>
        <CalendarPicker/>
      </View>
    </SafeAreaProvider>
  );
}

export default DateGen;