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
import {userLogindata} from '../../../Redux/Actions/Actions';
import {useDashboardContext} from '../../../Context/DashboardContext';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { LoginwithFingerprint } from '../../../LoginwithFingerprint/LoginwithFingerprint';


const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const Login = props => {
  const [hidePass, setHidePass] = useState(true);
  const [Passward, setPassward] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  const [userdata, setuserdata] = useState({});
  const [email, setemail] = useState('');
  const [login, setlogin] = useState(true);

  const showDialog = () => setVisible(true);


  const rnBiometrics = new ReactNativeBiometrics();
  const dispatch = useDispatch();
  const {isSwitchOn,smartlogin,fingerprintdata} = useDashboardContext();


console.log("isSwitchOn in login screen", fingerprintdata, smartlogin);

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


//google Login

  // _signIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const {accessToken, idToken} = await GoogleSignin.signIn();
  //     setloggedIn(true);
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //       alert('Cancel');
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       alert('Signin in progress');
  //       // operation (f.e. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       alert('PLAY_SERVICES_NOT_AVAILABLE');
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }
  // };

  // signOut = async () => {
  //   try {
  //     await GoogleSignin.revokeAccess();
  //     await GoogleSignin.signOut();
  //     setloggedIn(false);
  //     setuserInfo([]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Provider>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container1}>
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
                onPress={() => LoginAccount()}>
                <Text style={styles.buttontext}>Login</Text>
              </TouchableOpacity>
              <View
                style={
                  smartlogin && userdata?.switch
                    ? styles.SignView
                    : styles.marginbootom
                }>
                <Text>Don`t have an Account</Text>
                <TouchableOpacity
                  style={styles.Signbutton}
                  onPress={() => props.navigation.navigate('Sign')}>
                  {/* props.navigation.navigate('Signpage') */}
                  <Text style={styles.text}> Sign</Text>
                </TouchableOpacity>
              </View>
              {/* isSwitchOn &&  */}

              {fingerprintdata?.switch && smartlogin ? (
                <TouchableOpacity
                  style={[styles.button, styles.fingerprint]}
                  onPress={() => LoginwithFingerprint()}>
                  <Text style={styles.buttontext1}>Login with </Text>
                  <Icon name={'finger-print-sharp'} size={28} />
                </TouchableOpacity>
              ) : null}
                <GoogleSigninButton
                  style={styles.googleButton}
                  size={GoogleSigninButton.Size.Wide}
                  color={GoogleSigninButton.Color.Dark}
                  // onPress={this._signIn}
                /> 
            </View>
          </ScrollView>
          {/* <Pushcontroller/> */}
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
  container2: {
    paddingHorizontal: 20,
    flex:1,
    backgroundColor: 'white',
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
  googleButton:{
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
