import { Alert } from 'react-native';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import { useDashboardContext } from '../Context/DashboardContext';
const rnBiometrics = new ReactNativeBiometrics();
// const {biometryType} = await rnBiometrics.isSensorAvailable();

//fingerprint login

export const LoginwithFingerprint = async () => {

    const {
        isSwitchOn,smartlogin,fingerprintdata,
        userdata, setuserdata
      } = useDashboardContext();

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
