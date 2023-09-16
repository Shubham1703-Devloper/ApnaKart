import React, {useState, useEffect, memo} from 'react';
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

interface Props {
  onPress?: ()=>void;
  data?: any;
  setdata?: any;
  settemp?: any;
  }

const CustomImagePicker : React.FC<Props> = ({onPress,data,settemp, setdata}) => {

  const pickImage = async () => {
    // const result = await launchImageLibrary({
    //   mediaTypes: 'photo',
    //   allowsEditing: true,
    //   multiple: true,
    //   aspect: [4, 3],
    // });
    // console.log(result);

    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
      minFiles: 5,
    }).then(images => {
      //console.log(images);
      //DATA.push(images)
      if (images.length < 6) {
        setdata(images);
        settemp(1)
        console.log(data);
      } else {
        Alert.alert('You have Exceeded Upload Limit');
      }
    });
  };




  const requestCameraPermission1 = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
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
        pickImage();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };


  return(
    <View>
      <Button
          icon="image-filter-vintage"
          mode="contained"
          onPress={() => {
            requestCameraPermission1();
            settemp(1);
          }}>
          Pick an image
        </Button>
    </View>
  )
};
export default memo(CustomImagePicker);