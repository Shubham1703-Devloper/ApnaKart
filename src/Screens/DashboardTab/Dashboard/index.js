
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
import CustomButton from '../../../Components/Button';
import {ActivityIndicator, Appbar, MD2Colors, Menu, Provider} from 'react-native-paper';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {
  ProductlistItems,
  RemovelistItems,
  addItemtoKart,
} from '../../../Redux/Actions/Actions';
import CustomTopBar from '../../../Components/CustomTopBar';
import { useDashboardContext } from '../../../Context/DashboardContext';
import CustomModal from '../../../Components/CustomModal';
import { useAuthContext } from '../../../Context/AuthContext';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const DashBoard = props => {
  const [press, setpress] = React.useState();
  const [visible, setVisible] = React.useState(false);
  const [productlist, setProductlist] = React.useState([]);
  const [data, setdata] = React.useState([]);
   const [Loading, setLoadinga] = React.useState(true);
  const dispatch = useDispatch();
  const {ProductItemPress, Listdata,
    setListdata,setAddkartItem,checklogout
} = useDashboardContext();

const {modalVisible, setModalVisible} =  useAuthContext()

  const Productdata = useSelector(state => {
    return state.ListReducers;
  });


  const countdata = useSelector(state => {
    // console.log('state.Reducers', state);
    return state?.Reducers;
  });
  let datacount = [...countdata];

  //use effect for getproduct list
  useEffect(() => {
    checklogout()
    Productdata.length > 0 ? setLoadinga(false) : GetProduct();
    console.log('helloinjfhgjfh jdfg fdjg fd');
  }, []);

  const closeMenu = () => {
    setVisible(false);
  };

  const showmenu = () => {
    setVisible(true);
    console.log('helloo');
    setTimeout(() => {
      closeMenu()
    }, 3000);
  };

  const GetProduct = () => {
    setLoadinga(true)
    axios.get(`https://fakestoreapi.com/products`).then(response => {
      // setProductlist(response.data);
      setLoadinga(false)
      dispatch(ProductlistItems(response.data));
    });
  };

  const addItem = (item, index) => {
    dispatch(addItemtoKart(item));
    dispatch(RemovelistItems(index));
    Alert.alert('AddToKart Successfully!');
  };

  return (
    <View style={styles.container}>
      <Provider>
        <CustomTopBar
          title={'ApnaKart'}
          onDismiss={closeMenu}
          showmenu={showmenu}
          datacount={datacount}
          visible={visible}
          RighticonPress={() => props.navigation.navigate('Addkart')}
          LeftIconPress={() => props.navigation.openDrawer()}
          searchIconPress={() => {setModalVisible(true)}}
          LeftIcon={'menu'}
          MenuItem={
            <>
              <Menu.Item onPress={() => {}} title="Setting" />
              <Menu.Item onPress={() => {setModalVisible(true)}} title="Search" />
              <Menu.Item onPress={() => {}} title="Filter" />
              <Menu.Item onPress={() => {}} title="Help" />
              <Menu.Item onPress={() => {}} title="FeedBack" />
              <Menu.Item onPress={() => {}} title="Log Out" />
            </>
          }
        />

       {Loading ? (
          <View style={styles.nodataStyle}>
             <Text style={styles.nodataTextStyle}>Loading...</Text>
           <ActivityIndicator animating={true} color={'#fc4e03'} size={30}/>
          </View>
        ) : null}


        <View style={styles.FlatListView}>
          <FlatList
            data={Productdata}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <Item onPress={() => addItem(item, index)} ProductItemPress={(item)=>{  
              props.navigation.navigate('ProductInfo')
              setAddkartItem(true)
              ProductItemPress(item,index)
              }} item={item} />
            )}
            ListFooterComponent={
              <View style={styles.ListFooterComponent}></View>
            }
          />
        </View>

        {/* {Productdata.length == 0 ? (
          <View style={styles.nodataStyle}>
            <Text style={styles.nodataTextStyle}>No Data Found!</Text>
          </View>
        ) : null} */}

       <CustomModal
       />
        <View style={{marginHorizontal: 40, alignSelf: 'center'}}></View>
      </Provider>
    </View>
  );
};

export default DashBoard;

const Item = ({item, onPress,ProductItemPress}) => {
  var price = item.price*81
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
