import {PropTypes} from 'prop-types';
import React, {PureComponent, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {View, Text, Dimensions, TouchableHighlight} from 'react-native';
// import {Button} from 'react-native';
import Toptabnavigator from '../../Toptabnavigator';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from './styles';
import {Rating, AirbnbRating} from 'react-native-ratings';
import CustomButton from '../../../Components/Button';
import Button from '../../../Components/Button';
import {Appbar, Menu, Provider} from 'react-native-paper';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {ProductlistItems, addItemtoKart} from '../../../Redux/Actions/Actions';
import {stat} from 'react-native-fs';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const DashBoard = props => {
  const [press, setpress] = React.useState();
  const [visible, setVisible] = React.useState(false);
  const [productlist, setProductlist] = React.useState([]);
  const [data, setdata] = React.useState([]);
  const dispatch = useDispatch();

  const Productdata = useSelector(state => {
    return state.ListReducers;
  });
  const countdata = useSelector(state => {
    console.log('state.Reducers', state);
    return state.Reducers;
  });
  let datacount = [...countdata];

  //use effect for getproduct list
  useEffect(() => {
    GetProduct();
  }, []);

  const closeMenu = () => {
    setVisible(false);
  };

  const showmenu = () => {
    setVisible(true);
    console.log('helloo');
  };

  const GetProduct = () => {
    axios.get(`https://fakestoreapi.com/products`).then(response => {
      // setProductlist(response.data);

      dispatch(ProductlistItems(response.data));
    });
  };

  const addItem = item => {
    dispatch(addItemtoKart(item));
    console.log('addddd');
  };

  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Provider>
          <Appbar.Header>
            <Appbar.Action
              icon="menu"
              onPress={() => props.navigation.openDrawer()}
              size={28}
              style={{paddingLeft: 3}}
            />
            <Appbar.Content title="ApnaKart" subtitle={'India'} />
            <Appbar.Action icon="magnify" onPress={() => {}} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View style={styles.shopingkart}>
                <Text style={{fontSize: 8, color: 'white', fontWeight: 'bold'}}>
                  {datacount.length}
                </Text>
              </View>
              <Appbar.Action
                icon="cart-heart"
                // iconColor="black"
                onPress={() => props.navigation.navigate('Addkart')}
              />
            </View>

            {/* <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',      
              }}>
              <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Appbar.Action icon={MORE_ICON} onPress={showmenu} />}>
                <Menu.Item onPress={() => {}} title="Setting" />
                <Menu.Item onPress={() => {}} title="Search" />
                <Menu.Item onPress={() => {}} title="Filter" />
                <Menu.Item onPress={() => {}} title="Help" />
                <Menu.Item onPress={() => {}} title="FeedBack" />
                <Menu.Item onPress={() => {}} title="Log Out" />
              </Menu>
            </View> */}
          </Appbar.Header>
        </Provider>
      </View>
      {/* <StatusBar translucent={true} backgroundColor={'transparent'}/> */}
      <View style={styles.FlatListView}>
        <FlatList
          data={Productdata}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Item onPress={() => addItem(item)} item={item} />
          )}
          ListFooterComponentStyle={{paddingVertical: 6}}
        />
      </View>

      <View style={{marginHorizontal: 40, alignSelf: 'center'}}></View>
    </View>
  );
};

export default DashBoard;

const Item = ({item, onPress}) => {
  return (
    <View style={styles.main}>
      <View>
        <Image
          source={{uri: item.image}}
          resizeMode="contain"
          style={styles.imagestyle}
        />
      </View>

      <Text style={styles.TittleStyle}>{item.title}</Text>
      <Text style={styles.PriceStyle}>Rs {item.price * 80}</Text>
      <CustomButton
        onPress={onPress}
        titleStyle={styles.titleStyle}
        buttonStyle={styles.buttonStyle}
        purpleStyle
        title="ADD TO CART"
      />
    </View>
  );
};

{
  /* <Button onPress={() => props.navigation.openDrawer()} title="Press" /> */
}
{
  /* <View style={{marginTop: 40}}>
        <Rating
          type="star"
          ratingCount={5}
          imageSize={60}
          showRating={true}
          minValue={0}
          maxValue={5}
          startingValue={0}
          fractions={1.5}
          jumpValue={0.5}
          onFinishRating={rating => console.log(rating)}
        />
      </View> */
}
