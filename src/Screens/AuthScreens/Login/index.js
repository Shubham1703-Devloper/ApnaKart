import React, {useEffect, useReducer, useState} from 'react';
import {Appbar, Dialog} from 'react-native-paper';
import DialogView from '../../../Components/DialogView';

import {
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Alert,
  ScrollView,
} from 'react-native';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import {Avatar, Button} from 'react-native-paper';
import {
  TextInput,
  HelperText,
  Paragraph,
  Portal,
  Provider,
} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import Icon from 'react-native-vector-icons/Ionicons';
import {log} from 'react-native-reanimated';
import {userLogindata} from '../../../Redux/Actions/Actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDashboardContext} from '../../../Context/DashboardContext';
import {useAuthContext} from '../../../Context/AuthContext';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const Login = props => {
  const [hidePass, setHidePass] = useState(true);
  const [Passward, setPassward] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const [smartlogin, setsmartlogin] = useState(false);
  const [userdata, setuserdata] = useState({});
  const [email, setemail] = useState('');

  const showDialog = () => setVisible(true);


  const rnBiometrics = new ReactNativeBiometrics();
  const dispatch = useDispatch();
  const {isSwitchOn} = useDashboardContext();


 useEffect(()=>{
  // loginuser = JSON.parse(await AsyncStorage.getItem('@usercridencial'));
  loginstart()
 },[isSwitchOn])


 const loginstart=async()=>{
  
  loginuser = JSON.parse(await AsyncStorage.getItem('@usercridencial'));
  console.log('hllllll jfgjf  ======>',loginuser);
 }
 

  const LoginwithFingerprint = async () => {
    rnBiometrics.isSensorAvailable().then(resultObject => {
      const {available, biometryType} = resultObject;

      if (available && biometryType === BiometryTypes.TouchID) {
        console.log('TouchID is supported');
      } else if (available && biometryType === BiometryTypes.FaceID) {
        console.log('FaceID is supported');
      } else if (available && biometryType === BiometryTypes.Biometrics) {
        console.log('Biometrics is supported');
      } else {
        console.log('Biometrics not supported');
      }
    });

    if (userdata != null) {
      rnBiometrics.createKeys().then(resultObject => {
        const {publicKey} = resultObject;
        console.log(publicKey);
        // sendPublicKeyToServer(publicKey)
      });

      rnBiometrics.biometricKeysExist().then(resultObject => {
        const {keysExist} = resultObject;

        if (keysExist) {
          console.log('Keys exist');
        } else {
          console.log('Keys do not exist or were deleted');
        }
      });

      let epochTimeSeconds = Math.round(new Date().getTime() / 1000).toString();
      let payload = epochTimeSeconds + 'some message';

      rnBiometrics
        .createSignature({
          promptMessage: 'Login with FingerPrint',
          payload: payload,
        })
        .then(resultObject => {
          const {success, signature} = resultObject;

          if (success) {
            console.log(signature);
            props.navigation.navigate('DrawerNavigation');
            // verifySignatureWithServer(signature, payload)
          }
        });
    } else {
      Alert.alert('Please Login with userName & Password');
    }
  };

  const logindata = useSelector(state => {
    return state.LoginReducers;
  });


  const LoginAccount = () => {
    if (email == '' || Passward == '') {
      Alert.alert('Please fill all the fields');
    } else {
      logindata?.forEach(element => {
        if (element.email == email && element.Passward == Passward) {
          dispatch(userLogindata({email: email, Passward: Passward}));
          Alert.alert('Congratulations You have Login Successfully!');
          props.navigation.navigate('DrawerNavigation');
        } else {
          Alert.alert('Please Enter Correct Email and Password!');
        }
      });
    }
  };



  const startlogin = async () => {
    var loginuser;
    rnBiometrics.isSensorAvailable().then(resultObject => {
      const {available, biometryType} = resultObject;
      setsmartlogin(available);
    });
    loginuser = JSON.parse(await AsyncStorage.getItem('@usercridencial'));
    setuserdata(loginuser);
  };



  return (
    <View style={styles.container}>
      <View style={styles.container2}>
      <Provider>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container1}>
          <View style={styles.container3}>
            <Avatar.Image
              size={80}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmFw0jctbuxfPI2kScpcU4ZRBJZjx6HR-3w&usqp=CAU',
              }}
            />
            <Text style={styles.logintext}>Login</Text>

            <TextInput
              mode="outlined"
              label="Email or Phone Number"
              placeholder="Enter Email or Phone"
              maxLength={25}
              style={styles.textinput}
              onChangeText={email => setemail(email)}
            />

            <TextInput
              mode="outlined"
              placeholder="Enter Passward"
              label="Enter Passward"
              secureTextEntry={hidePass ? true : false}
              right={
                <TextInput.Icon
                  icon={!hidePass ? 'eye' : 'eye-off'}
                  onPress={() => setHidePass(!hidePass)}
                />
              }
              style={styles.textinput}
              value={Passward}
              onChangeText={Passward => setPassward(Passward)}
            />

            <TouchableOpacity onPress={() => {}}>
              {/* props.navigation.navigate('Forgotpassward') */}
              <Text style={styles.forgottext}>Forgot Your Passward</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>  LoginAccount()}>
              <Text style={styles.buttontext}>Login</Text>
            </TouchableOpacity>
            <View style={smartlogin && userdata?.switch ?styles.SignView: styles.marginbootom}>
              <Text>Don`t have an Account</Text>
              <TouchableOpacity
                style={styles.Signbutton}
                onPress={() => props.navigation.navigate('Sign')}>
                {/* props.navigation.navigate('Signpage') */}
                <Text style={styles.text}> Sign</Text>
              </TouchableOpacity>
            </View>

            
     { smartlogin ? <TouchableOpacity
      style={[styles.button, styles.fingerprint]}
      onPress={() => LoginwithFingerprint()}>
      <Text style={styles.buttontext1}>Login with </Text>
      <Icon name={'finger-print-sharp'} size={28} />
    </TouchableOpacity>:null}
  
    
  
  
    
      
             
           
          </View>
        </ScrollView>
      </Provider>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blurcontainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e3e2e1',
    justifyContent: 'center',
  },

  container1: {

  },

  container2: {
    paddingHorizontal: 20,
    // marginVertical: 20,
    // marginHorizontal:20,
    flex:1,

    backgroundColor: 'white',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,

    // elevation: 4,
    // borderRadius: 5,
  },

  container3:{
   alignItems:'center',
   paddingTop:60
  },
  logintext: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
  },
  textinput: {
    width: '90%',
    marginTop: 20,
  },
  forgottext: {
    marginTop: 10,
    marginLeft: 130,
    alignSelf: 'flex-end',
  },
  button: {
    height: 50,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    borderRadius: 5,
    marginTop: 80,
    // marginBottom: 20,
  },
  buttontext: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttontext1: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  Signbutton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignView: {
    flexDirection: 'row',
    marginTop:5,
  },
  text: {
    color: 'skyblue',
  },
  fingerprint: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 5,
    borderRadius: 5,
    marginTop: 20,
    flexDirection: 'row',
    marginBottom: 56,
  },

  marginbootom:{
    marginBottom: 56,
    marginTop:5,
    flexDirection: 'row',
  }
});

export default Login;
