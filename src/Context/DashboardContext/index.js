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
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';

export const DashboardContext = createContext({});

export function DashboardContextProvider({children}) {
  // We wrap it in a useMemo for performance reason
  const [ItemInfo, setItemInfo] = useState({});
  const [Itemindex, setItemindex] = useState(0);
  const [addPress, setAddPress] = useState(false);
  const [Listdata, setListdata] = useState([]);
  const [AddkartItem, setAddkartItem] = useState(false);
  const [visible, setVisible] = useState(false);
  const [valuechange, setvaluechange] = useState('');
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [smartlogin, setsmartlogin] = useState(false);
  const [fingerprintdata, setfingerprintdata] = useState({"Passward": "", "email": "", "switch": false});


  const rnBiometrics = new ReactNativeBiometrics();


  const ProductItemPress = (item, index) => {
    setItemInfo(item);
    setItemindex(index);
  };

  const closeMenu = () => {
    setVisible(false);
  };

  const showmenu = () => {
    setVisible(true);
    console.log('helloo');
  };

  const countdata = useSelector(state => {
    console.log('state.Reducers', state);
    return state?.Reducers;
  });
  let datacount = [...countdata];



  const loginuserdata = useSelector(state => {
    return state.LoginUserdataReducers;
  });

  const onToggleSwitch = async () => {
    setIsSwitchOn(!isSwitchOn)
    if (isSwitchOn) {
      await AsyncStorage.setItem(
        '@usercridencial',
        JSON.stringify({...loginuserdata, switch: false}),
      );
    } else {
      await AsyncStorage.setItem(
        '@usercridencial',
        JSON.stringify({...loginuserdata, switch: true}),
      );
    }
  };


  useEffect(()=>{
    loginstart()
  },[isSwitchOn])

  const loginstart=async()=>{
    rnBiometrics.isSensorAvailable().then(resultObject => {
      const {available, biometryType} = resultObject;
      setsmartlogin(available)
       console.log('hllllll jfgjf  ======>',available);
    });
    loginuser = JSON.parse(await AsyncStorage.getItem('@usercridencial'));
    setfingerprintdata(loginuser)
   }


  const contextPayload = useMemo(
    () => ({
      // States
      ItemInfo,
      setItemInfo,
      Itemindex,
      setItemindex,
      addPress,
      setAddPress,
      Listdata,
      setListdata,
      AddkartItem,
      setAddkartItem,
      visible,
      setVisible,
      isSwitchOn, setIsSwitchOn,
      valuechange, setvaluechange,
      smartlogin, setsmartlogin,
      fingerprintdata, setfingerprintdata,

      //API calls

      // Form Initial States & Validations

      //functions
      ProductItemPress,
      showmenu,
      closeMenu,
      datacount,
      countdata,
      onToggleSwitch,
    }),
    [
      // States
      ItemInfo,
      setItemInfo,
      Itemindex,
      setItemindex,
      addPress,
      setAddPress,
      Listdata,
      setListdata,
      AddkartItem,
      setAddkartItem,
      visible,
      setVisible,
      isSwitchOn, setIsSwitchOn,
      valuechange, setvaluechange,
      smartlogin, setsmartlogin,
      fingerprintdata, setfingerprintdata,

      //API calls

      // Form Initial States & Validations

      //functions
      ProductItemPress,
      showmenu,
      closeMenu,
      datacount,
      countdata,
      onToggleSwitch,
    ],
  );

  // We expose the context's value down to our components, while
  // also making sure to render the proper content to the screen
  return (
    <DashboardContext.Provider value={contextPayload}>
      {children}
    </DashboardContext.Provider>
  );
}

// A custom hook to quickly read the context's value. It's
// only here to allow quick imports
export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardContext;
