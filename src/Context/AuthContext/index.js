/* eslint-disable no-unused-vars */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {useSelector} from 'react-redux';
import {useDashboardContext} from '../DashboardContext';
import { log } from 'react-native-reanimated';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
export const AuthContext = createContext({});

export function AuthContextProvider({children}) {
  const rnBiometrics = new ReactNativeBiometrics();

  const [isFindMoreAnalytics, setIsFindMoreAnalytics] = useState(false);
  const {isSwitchOn} = useDashboardContext();
  const [smartlogin, setsmartlogin] = useState(false);
  const [fingerprintdata, setfingerprintdata] = useState({"Passward": "", "email": "", "switch": false});
  const [userdata, setuserdata] = useState({});
  const [loginuser, setloginuser] = useState({});
  const [logout, setLogout] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);

  const getdataformlocal = async () => {
 
  };


  useEffect(()=>{
    checklogin()
  },[])

   const checklogin = async () => {
    var data;
    data = JSON.parse(await AsyncStorage.getItem('logout'));
    console.log('authdata===',data);
    setLogout(data);
  };

  const contextPayload = useMemo(
    () => ({
      // States
      isFindMoreAnalytics,
      setIsFindMoreAnalytics,
      loginuser,
      setloginuser,
      fingerprintdata, setfingerprintdata,smartlogin, setsmartlogin,
      loginuser, setloginuser,userdata, setuserdata,
      logout, setLogout,
      modalVisible, setModalVisible,

      //API calls

      // Form Initial States & Validations

      //functions
      getdataformlocal,
      checklogin
    }),
    [
      // States
      isFindMoreAnalytics,
      setIsFindMoreAnalytics,
      loginuser,
      setloginuser,
      fingerprintdata, setfingerprintdata,smartlogin, setsmartlogin,
      loginuser, setloginuser,userdata, setuserdata,
      logout, setLogout,
      modalVisible, setModalVisible,

      //API calls

      // Form Initial States & Validations

      //functions
      getdataformlocal,
      checklogin
    ],
  );

  // We expose the context's value down to our components, while
  // also making sure to render the proper content to the screen
  return (
    <AuthContext.Provider value={contextPayload}>
      {children}
    </AuthContext.Provider>
  );
}

// A custom hook to quickly read the context's value. It's
// only here to allow quick imports
export const useAuthContext = () => useContext(AuthContext);

export default AuthContext;
