import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
const rnBiometrics = new ReactNativeBiometrics();
const {biometryType} = await rnBiometrics.isSensorAvailable();

const Biometrics = () => {
  if (biometryType === BiometryTypes.Biometrics) {
    //do something face id specific
  }
  return <View></View>;
};

export default Biometrics;
