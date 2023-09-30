import {PropTypes} from 'prop-types';
import React, {PureComponent, useEffect, useRef, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {View, Text, Dimensions, TouchableHighlight} from 'react-native';
import {
  ActivityIndicator,
  Appbar,
  Divider,
  MD2Colors,
  Menu,
  Provider,
} from 'react-native-paper';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {useDashboardContext} from '../../../../Context/DashboardContext';
import styles from './styles';
import {Rating} from 'react-native-ratings';
import {
  RemovelistItems,
  addItemtoKart,
} from '../../../../Redux/Actions/Actions';
import CustomButton from '../../../../Components/Button';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const ProductInfo = props => {
  const [press, setpress] = React.useState();
  const [visible, setVisible] = React.useState(false);
  const [productlist, setProductlist] = React.useState([]);
  const [data, setdata] = React.useState([]);
  const [Loading, setLoadinga] = React.useState(true);
  const dispatch = useDispatch();
  const scrollRef = useRef();
  
  const {ItemInfo,AddkartItem,setAddkartItem,Itemindex, ProductItemPress,addPress, setAddPress} = useDashboardContext();


  const Productdata = useSelector(state => {
    var data = state.ListReducers.filter((elem)=>{
      return elem.category==ItemInfo?.category
    });
    return data;
  });

  console.log('ItemInfo==========>', ItemInfo);
  var Price = ItemInfo?.price * 80;

  const addItem = (item, index) => {
      dispatch(addItemtoKart(item));
      dispatch(RemovelistItems(index));
      setAddPress(true);
  };

  const addItem1 = (item, index) => {
    dispatch(addItemtoKart(item));
    dispatch(RemovelistItems(index));
    Alert.alert('AddToKart Successfully!');
  };


  const onPressTouch = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: false,
    });
  }

  return (
    <View style={styles.container}>
      <Provider>
        <ScrollView ref={scrollRef}>
          {ItemInfo == null ? (
            <View style={styles.nodataStyle}>
              <Text style={styles.nodataTextStyle}>Loading...</Text>
              <ActivityIndicator animating={true} color={'#fc4e03'} size={30} />
            </View>
          ) : null}

          <View style={styles.imageViewStyle}>
            <Image
              source={{uri: ItemInfo.image}}
              resizeMode="contain"
              style={styles.imagestyle}
            />
          </View>

          <View style={styles.ItemDesView}>
            <Text style={styles.TittleStyle}>{ItemInfo?.title}</Text>
            <Text style={styles.PriceStyle}>Rs {' ' + Price?.toFixed(2)}</Text>
            <View style={styles.ratingViewStyle}>
              <Rating
                readonly
                imageSize={25}
                style={styles.starContainerStyle}
                startingValue={ItemInfo?.rating?.rate}
                fractions={1.5}
                jumpValue={0.1}
                onFinishRating={rating => console.log(rating)}
              />
              <Text>
                {'  ' +
                  ItemInfo?.rating?.rate +
                  ' ' +
                  '(' +
                  ItemInfo?.rating?.count +
                  ')'}
              </Text>
            </View>
            <Text style={styles.Type}>Type - {ItemInfo?.category}</Text>

            <Text style={styles.description}>{ItemInfo?.description}</Text>

            {/* <View style={styles.midbuttonView}>
          <TouchableOpacity
            onPress={() => {
                addItem(ItemInfo, Itemindex);
                Alert.alert('AddToKart Successfully!');
            }}
            style={styles.midBookbutton}>
            <Text style={[styles.TrainameText, styles.TextColor]}>
              ADD TO KART
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Congratulation! Successfully Buying Product Thanks!',
              );
            }}
            style={styles.midpessengerbutton}>
            <Text style={[styles.TrainameText, styles.TextColor]}>BUY NOW</Text>
          </TouchableOpacity>
        </View> */}

            <CustomButton
              onPress={() => {
                addItem(ItemInfo, Itemindex);
                Alert.alert('AddToKart Successfully!');
              }}
              titleStyle={styles.titleStyle}
              buttonStyle={AddkartItem ? styles.buttonStyle : styles.redbuttonStyle}
              purpleStyle
              title = {AddkartItem ? "ADD TO CART" : 'Remove From Cart'}
            />
          </View>

          <Divider style={styles.deviderStyle} />

         


          <View style={styles.FlatListView}>
          <Text style={styles.SimilarType}>Similar Products</Text>
            <FlatList
              data={Productdata}
              numColumns={2}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <Item
                  onPress={() => addItem1(item, index)}
                  ProductItemPress={item => {
                    props.navigation.navigate('ProductInfo');
                    onPressTouch();
                    setAddkartItem(true)
                    ProductItemPress(item, index);
                  }}
                  item={item}
                />
              )}
              ListFooterComponent={
                <View style={styles.ListFooterComponent}></View>
              }
            />
          </View>

          {Productdata?.length == 0 ? (
          <View style={styles.nodataStyle}>
            <Text style={styles.nodataTextStyle}>No Data Found!</Text>
          </View>
        ) : null}
      
        </ScrollView>

        <View style={{marginBottom: 60, alignSelf: 'center'}}></View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={() => {
              addItem(ItemInfo, Itemindex);
              Alert.alert('AddToKart Successfully!');
            }}
            style={styles.Bookbutton}>
            <Text style={[styles.TrainameText, styles.TextColor]}>
              ADD TO KART
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Congratulation! Successfully Buying Product Thanks!',
              );
            }}
            style={styles.pessengerbutton}>
            <Text style={[styles.TrainameText, styles.TextColor]}>BUY NOW</Text>
          </TouchableOpacity>
        </View>
      </Provider>
    </View>
  );
};

export default ProductInfo;




const Item = ({item, onPress,ProductItemPress}) => {
  var price = item.price*80
  return (
    <TouchableOpacity onPress={()=>ProductItemPress(item)} style={styles.main}>
      <View>
        <Image
          source={{uri: item.image}}
          resizeMode="contain"
          style={styles.imageItemstyle}
        />
      </View>

      <Text style={styles.TittleStyle}>{item.title}</Text>
      <Text style={styles.PriceStyle}>Rs {price.toFixed(2)}</Text>
      <CustomButton
        onPress={onPress}
        titleStyle={styles.titleStyle}
        buttonStyle={styles.buttonStyle}
        purpleStyle
        title="ADD TO CART"
      />
    </TouchableOpacity>
  );
};
