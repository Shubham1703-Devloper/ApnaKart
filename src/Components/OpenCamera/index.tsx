import React, {useState, useEffect} from 'react';
import {
  PermissionsAndroid,
  Image,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Text,
  FlatList,
  Alert,
} from 'react-native';
import {Button} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
interface Props {
  onPress?: ()=>void;
  image?: string;
  setImage?: any;
  data?: any;
  setdata?: any;
  settemp: any;
  }

  const OpenCamera : React.FC<Props> = ({
    onPress,
    image, setImage,
    data,
    setdata,
    settemp,
    ...rest
}) => {

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        camera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

const camera = async () => {
  const result = await launchCamera({cameraType:'front',mediaType:'photo',saveToPhotos:true})
  console.log(result);

  if (!result.didCancel) {
    setdata(result.assets);
    settemp(0)
    console.log(data);
  }
};


  return (
    <View>
      
      <Button
          icon="camera"
          mode="contained"
          onPress={()=>{
            Platform.OS === 'android' ? requestCameraPermission() : camera()
            settemp(0)
          }}>
          Camera
        </Button>

     </View>
  );
};



export default OpenCamera;