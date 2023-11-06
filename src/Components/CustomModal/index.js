import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity} from 'react-native';
import {useAuthContext} from '../../Context/AuthContext';
import CustomTextInput from '../TextInput';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dimensions from '../Dimensions/Dimensions';

const CustomModal = () => {
  const {modalVisible, setModalVisible} = useAuthContext();
  return (
    <Modal
      animationType="slide"
      presentationStyle={'fullScreen'}
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <TouchableOpacity  onPress={() => setModalVisible(!modalVisible)} style={styles.closebuttonStyle}>
            <MaterialCommunityIcons  onPress={() => setModalVisible(!modalVisible)} name="close" size={30} color="red" />
            </TouchableOpacity>
         

          <CustomTextInput
            mode="outlined"
            placeholder="Search"
            Searchbar={false}
            leftIcon={<Icon name="search" size={28} color="black" />}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    backgroundColor: 'white',
    padding: 10,
    height: Dimensions.windowHeight,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  closebuttonStyle:{
    height:50,
    width:50,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
  }
});

export default CustomModal;
