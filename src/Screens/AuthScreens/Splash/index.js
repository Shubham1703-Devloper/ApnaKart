import React, {useEffect, useReducer, useState} from 'react';

import {
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from 'react-native-paper';


const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const Splash = props => {

  const rnBiometrics = new ReactNativeBiometrics();
  const dispatch = useDispatch();
  const [log,setLog] = useState(false)

  console.log('logoutjkfjgkf=====>',log);
  useEffect(()=>{
    checklogin()
  },[])
  const checklogin = async () => {
    var data;
    data = JSON.parse(await AsyncStorage.getItem('logout'));
    console.log('authdata===',data);
    setLog(data);
    setTimeout(()=>{
      if(data || data==null){
        props.navigation.navigate('Login')
      }
      else{
        props.navigation.navigate('DrawerNavigation')
      }
    },500)
   
  };


  return (
    <View style={styles.container}>

      <Text style={styles.LoadingText}>Loading...</Text>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  LoadingText:{
    fontSize:24,
    fontWeight:'700',
    color:'black'
  }
});

export default Splash;
