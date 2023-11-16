import React, {useEffect, useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {useAuthContext} from '../../Context/AuthContext';
import CustomTextInput from '../TextInput';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dimensions from '../Dimensions/Dimensions';
import Button from '../Button';

const defsearchdata = [
  {
    id: 1,
    title: "women's clothing",
  },
  {
    id: 2,
    title: 'electronics',
  },
  {
    id: 3,
    title: 'jewelery',
  },
  {
    id: 4,
    title: "men's clothing",
  },
];

const CustomModal = ({data,onPress}) => {
  const {
    modalVisible,
    setModalVisible,
    searchdata,
    setSearchdata,
    searchvalue,
    setSearchvalue,
  } = useAuthContext();

  // useEffect(()=>{
  //   setSearchdata(data)
  // },[])

  const SearchItem = value => {
    setSearchvalue(value);
    if (value != '') {
      var newdata = data.filter(elem => {
        return elem.title.toLowerCase().match(value.toLowerCase()) || elem.category.toLowerCase().match(value.toLowerCase());
      });
      setSearchdata(newdata);
    } else {
      setSearchdata([]);
    }
  };

  const ProductItemPress = (elem) => {
    onPress()
    setSearchvalue(elem)
  };

  const rightIconPress=()=>{
    onPress()
    setTimeout(() => {
      setModalVisible(false);
    }, 500);
  }
  return (
    <Modal
      animationType="slide"
      presentationStyle={'fullScreen'}
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        // Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.closebuttonStyle}>
            <MaterialCommunityIcons name="close" size={30} color="red" />
          </TouchableOpacity>

          <View style={styles.containerStyle}>

            
            <CustomTextInput
              mode="outlined"
              placeholder="Search"
              value={searchvalue}
              returnKeyType="search"
              onSubmitEditing={(event) =>  rightIconPress(event)}
              onChangeText={searchvalue => SearchItem(searchvalue)}
              Searchbar={false}
              rightIcon={<TextInput.Icon onPress={()=>{
                  rightIconPress(searchvalue)
              }} icon={'magnify'} />}
            />
          </View>

          <FlatList
            data={searchvalue.length>0 ? searchdata : defsearchdata}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <Item
                onPress={() => addItem(item, index)}
                ProductItemPress={item => {
                  // setSearchvalue(item?.title);
                  ProductItemPress(item?.title);
                }}
                item={item}
              />
            )}
            ListFooterComponent={
              <View style={styles.ListFooterComponent}></View>
            }
          />
        </View>
      </View>
    </Modal>
  );
};

const Item = ({item, onPress, ProductItemPress}) => {
  var price = item.price * 81;
  return (
    <TouchableOpacity
      onPress={() => ProductItemPress(item)}
      style={styles.main}>
      <View>
        {item.image == '' || item.image == null ? (
          <MaterialCommunityIcons name="magnify" size={30} color="grey" />
        ) : (
          <Image
            source={{uri: item?.image}}
            resizeMode="contain"
            style={styles.imagestyle}
          />
        )}
      </View>

      <Text style={styles.TittleStyle}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 0,
    // borderRadius: 15,
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
  closebuttonStyle: {
    height: 35,
    width: 35,
    borderRadius: 50,
    backgroundColor: '#fce0dc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerStyle: {
    marginTop: 10,
  },

  main: {
    // width: '100%',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  imagestyle: {
    width: 35,
    height: 35,
  },
  TittleStyle: {
    fontSize: 16,
    color: 'black',
    marginHorizontal: 15,
  },
  PriceStyle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  buttonStyle: {
    backgroundColor: '#1486e9',
    borderColor: '#1486e9',
  },
  titleStyle: {
    fontSize: 14,
  },

  ///nodata found Text

  nodataStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  nodataTextStyle: {
    fontSize: 18,
  },

  ListFooterComponent: {
    marginBottom: 70,
  },
});

export default CustomModal;
