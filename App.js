import React, {Children, useEffect, useRef} from 'react';
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
import {NavigationContainer} from '@react-navigation/native';
import Context from './src/Context';
import { useAuthContext } from './src/Context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default App = () => {

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={mystore}>
        <Context>
          <NavigationContainer>
            <Auth />
          </NavigationContainer>
        </Context>
      </Provider>
    </GestureHandlerRootView>
  );
};
