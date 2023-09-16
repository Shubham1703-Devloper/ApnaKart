import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Auth from './src/Screens/Auth';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {mystore} from './src/Redux/store/Store';
export default App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={mystore}>
        <Auth />
      </Provider>
    </GestureHandlerRootView>
  );
};
