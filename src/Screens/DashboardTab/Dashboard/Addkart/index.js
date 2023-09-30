import {PropTypes} from 'prop-types';
import React, {PureComponent, useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {View, Text, Dimensions, TouchableHighlight} from 'react-native';
import styles from './styles';
import Button from '../../../../Components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {
  AddlistItems,
  RemoveItemtoKart,
} from '../../../../Redux/Actions/Actions';
import {ListReducers} from '../../../../Redux/reducer/Reducers';
import CustomTopBar from '../../../../Components/CustomTopBar';
import {Menu, Provider} from 'react-native-paper';
import { useDashboardContext } from '../../../../Context/DashboardContext';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const Addkart = props => {
  const [totalprices, setTotalPrice] = useState(0);
  const items = useSelector(state => {
    return state.Reducers;
  });
  const dispatch = useDispatch();
  const {ProductItemPress,AddkartItem,setAddkartItem, addPress, setAddPress} = useDashboardContext();

  let Prices = 0;
  useEffect(() => {
    items.forEach(element => {
      Prices = Prices + element.price;
    });
    setTotalPrice(Prices);
  }, [items]);

  const RemoveItem = (index, item) => {
    console.log('remove', index);
    dispatch(RemoveItemtoKart(index));
    dispatch(AddlistItems(item));
    setAddPress(false);
  };

  return (
    <View style={styles.container}>
      <Provider>
      {/* <CustomTopBar
        title={'AddKart'}
        // onDismiss={closeMenu}
        // showmenu={showmenu}
        datacount={items}
        visible={true}
        RighticonPress={() => props.navigation.navigate('Addkart')}
        LeftIconPress={() => props.navigation.goBack()}
        searchIconPress={() => {}}
        MenuItem={
          <>
            <Menu.Item onPress={() => {}} title="Setting" />
            <Menu.Item onPress={() => {}} title="Search" />
            <Menu.Item onPress={() => {}} title="Filter" />
            <Menu.Item onPress={() => {}} title="Help" />
            <Menu.Item onPress={() => {}} title="FeedBack" />
            <Menu.Item onPress={() => {}} title="Log Out" />
          </>
        }
      /> */}
      <View style={styles.FlatListView}>
        <FlatList
          data={items}
          numColumns={2}
          keyExtractor={item => item.id}              
          renderItem={({item, index}) => (
            <Item onPress={() => RemoveItem(index, item)}  ProductItemPress={(e)=>{  
              props.navigation.navigate('ProductInfo')
              ProductItemPress(e,index)
              setAddkartItem(false)}} item={item} />
          )}
          ListFooterComponentStyle={{paddingVertical: 6}}
        />
        {items.length == 0 ? (
          <View style={styles.nodataStyle}>
            <Text style={styles.nodataTextStyle}>No Data Found!</Text>
          </View>
        ) : null}
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity onPress={() => {}} style={styles.Bookbutton}>
          <Text style={[styles.TrainameText, styles.TextColor]}>
            {' '}
            Total Rs
            {' ' + totalprices.toFixed(0)*80}
          </Text>
        </TouchableOpacity>
       

        <TouchableOpacity
          onPress={() => {
            Alert.alert('Congratulation! Successfully Buying Product Thanks!');
          }}
          style={styles.pessengerbutton}>
          <Text style={[styles.TrainameText, styles.TextColor]}>BUY NOW</Text>
        </TouchableOpacity>
      </View>
      </Provider>
    </View>
  );
};

export default Addkart;

const Item = ({item,ProductItemPress, onPress}) => {
  return (
    <TouchableOpacity onPress={()=>ProductItemPress(item)} style={styles.main}>
      <View>
        <Image
          source={{uri: item.image}}
          resizeMode="contain"
          style={styles.imagestyle}
        />
      </View>

      <Text style={styles.TittleStyle}>{item.title}</Text>
      <Text style={styles.PriceStyle}>Rs {item.price * 80}</Text>
      <Button
        onPress={onPress}
        titleStyle={styles.titleStyle}
        buttonStyle={styles.buttonStyle}
        purpleStyle
        title="REMOVE TO CART"
      />
    </TouchableOpacity>
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
