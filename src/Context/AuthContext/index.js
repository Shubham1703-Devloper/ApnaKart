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

export const AuthContext = createContext({});

export function AuthContextProvider({children}) {
  const [isFindMoreAnalytics, setIsFindMoreAnalytics] = useState(false);
  const [loginuser, setloginuser] = useState({});
  const {isSwitchOn} = useDashboardContext();

  const getdataformlocal = async () => {
 
  };

  const contextPayload = useMemo(
    () => ({
      // States
      isFindMoreAnalytics,
      setIsFindMoreAnalytics,
      loginuser,
      setloginuser,

      //API calls

      // Form Initial States & Validations

      //functions
      getdataformlocal,
    }),
    [
      // States
      isFindMoreAnalytics,
      setIsFindMoreAnalytics,
      loginuser,
      setloginuser,

      //API calls

      // Form Initial States & Validations

      //functions
      getdataformlocal,
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
