import React, {PureComponent, useEffect, useState} from 'react';
import {
  Alert,
  BackHandler,
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {View, Text, Dimensions, TouchableHighlight} from 'react-native';
import styles from './styles';
import CustomButton from '../../../Components/Button';
import {
  ActivityIndicator,
  Appbar,
  MD2Colors,
  Menu,
  Provider,
} from 'react-native-paper';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {
  ProductlistItems,
  RemovelistItems,
  addItemtoKart,
} from '../../../Redux/Actions/Actions';
import CustomTopBar from '../../../Components/CustomTopBar';
import {useDashboardContext} from '../../../Context/DashboardContext';
import CustomModal from '../../../Components/CustomModal';
import {useAuthContext} from '../../../Context/AuthContext';
import {StackActions, useFocusEffect, useRoute} from '@react-navigation/native';
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
  const {ProductItemPress, Listdata, setListdata, setAddkartItem, checklogout} =
    useDashboardContext();

  const {
    modalVisible,
    setModalVisible,
    searchvalue,
    setSearchvalue,
    setSearchdata,
  } = useAuthContext();

  var Productdata = [];

  Productdata = useSelector(state => {
    return state.ListReducers;
  });

  const countdata = useSelector(state => {
    // console.log('state.Reducers', state);
    return state?.Reducers;
  });
  let datacount = [...countdata];

  //backhandler

  const route = useRoute();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (route.name === 'Dashboard') {
          Alert.alert('Hold on!', 'Are you sure you want to Exit App?', [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            {text: 'YES', onPress: () => BackHandler.exitApp()},
          ]);
          return true;
        } else {
          return false;
        }
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
    }, []),
  );
  //use effect for getproduct list
  useEffect(() => {
    checklogout();
    Productdata.length > 0 ? setLoadinga(false) : GetProduct();
    console.log('helloinjfhgjfh jdfg fdjg fd');
  }, []);

  //modal open close
  const closeMenu = () => {
    setVisible(false);
  };

  const showmenu = () => {
    setVisible(true);
    console.log('helloo');
    setTimeout(() => {
      closeMenu();
    }, 3000);
  };
  //Api call Get product
  const GetProduct = () => {
    setLoadinga(true);
    axios.get(`https://fakestoreapi.com/products`).then(response => {
      // setProductlist(response.data);
      setLoadinga(false);
      dispatch(ProductlistItems(response.data));
    });
  };
  //Refresh page
  const onRefresh = () => {
    setSearchvalue('');
    setSearchdata([]);
  };

  //add item in add kart
  const addItem = (item, index) => {
    dispatch(addItemtoKart(item));
    dispatch(RemovelistItems(index));
    Alert.alert('AddToKart Successfully!');
  };

  //search item from product
  const SearchItem = () => {
    console.log('searchvalue==========', searchvalue);
    if (searchvalue != '') {
      var newdata = Productdata.filter(elem => {
        return (
          elem.title.toLowerCase().match(searchvalue.toLowerCase()) ||
          elem.category.toLowerCase().match(searchvalue.toLowerCase())
        );
      });
      setProductlist(newdata);
    } else {
      setProductlist(Productdata);
    }
  };

  return (
    <View style={styles.container}>
      <Provider>
        {/* //Topbar */}
        <CustomTopBar
          title={'ApnaKart'}
          onDismiss={closeMenu}
          showmenu={showmenu}
          datacount={datacount}
          route={route.name}
          visible={visible}
          RighticonPress={() => props.navigation.navigate('Addkart')}
          LeftIconPress={() => props.navigation.openDrawer()}
          searchIconPress={() => {
            setModalVisible(true);
            setSearchvalue('');
            setSearchdata([]);
          }}
          LeftIcon={'menu'}
          MenuItem={
            <>
              <Menu.Item onPress={() => {}} title="Setting" />
              <Menu.Item
                onPress={() => {
                  setModalVisible(true);
                }}
                title="Search"
              />
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
            <ActivityIndicator animating={true} color={'#fc4e03'} size={30} />
          </View>
        ) : null}

        <View style={styles.FlatListView}>
          <FlatList
            data={searchvalue.length > 0 ? productlist : Productdata}
            numColumns={2}
            refreshing={Loading}
            onRefresh={() => {
              onRefresh();
            }}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <Item
                onPress={() => addItem(item, index)}
                productlist={productlist}
                ProductItemPress={item => {
                  props.navigation.navigate('ProductInfo');
                  setAddkartItem(true);
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

        {/* {Productdata.length == 0 ? (
          <View style={styles.nodataStyle}>
            <Text style={styles.nodataTextStyle}>No Data Found!</Text>
          </View>
        ) : null} */}

        {/* //Search modal with funtion */}
        <CustomModal data={Productdata} onPress={() => SearchItem()} />
        <View style={{marginHorizontal: 40, alignSelf: 'center'}}></View>
      </Provider>
    </View>
  );
};

export default DashBoard;


//Flatelist Item function
const Item = ({item, productlist, onPress, ProductItemPress}) => {
  var price = item.price * 81;
  return (
    <TouchableOpacity
      onPress={() => ProductItemPress(item)}
      style={[styles.main]}>
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
