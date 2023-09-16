// Example of Animated Splash Screen in React Native
// https://aboutreact.com/animated-splash-screen/

// import React in our code
import React, {useState, useEffect, Children} from 'react';
import {TextInput, Searchbar} from 'react-native-paper';
// import all the components we are going to use
import Share from 'react-native-share';
import {
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import Button from '../Button';
//import MultiSelectComponent from "react-native-element-dropdown/lib/typescript/components/MultiSelect";


interface Props {
  item?: any;
  path?: any;
  fileName?: string | undefined;
  uri?:  string | undefined;
  message?: string | undefined;
  subject?:  string | undefined;
  }
  const ShareComp: React.FC<Props>= ({ item,path
}) => {

  const Shareimage=(item:any)=>{

    Share.open({
      filename: item.fileName,
      message: 'Message to share', // Note that according to the documentation at least one of "message" or "url" fields is required
      url: path ? item.path : item.uri,
      subject: 'Subject'
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  }
   
   return(
    <>
    <Button greyButton onPress={()=>Shareimage(item)} title={'Share'}/>
    </>
   )
 
};

export default ShareComp;
