import React, {PureComponent, memo, useState} from 'react';
import {
  Platform,
  View,
  TouchableOpacity,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  StyleProp,
  ViewStyle,
} from 'react-native';
import IMG from './logo_share_von_congstar.svg';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DateGen from '../../../Components/DateGen';
import {ScrollView} from 'react-native-gesture-handler';
import CustomButton from '../../../Components/Button';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Appbar,
  Provider,
  Chip,
  Snackbar,
  Avatar,
  Menu,
  Divider,
  TextInput,
} from 'react-native-paper';
import {ProgressBar, MD3Colors} from 'react-native-paper';
import CustomTextInput from '../../../Components/TextInput';
// import DropdownComponent from '../../../Components/DropdownComponent';
// import MultiSelect from 'react-native-multiple-select';
import CustomDatePicker from '../../../Components/CustomDatePicker';
import Button from '../../../Components/Button';
import CustomTopBar from '../../../Components/CustomTopBar';
import { useSelector } from 'react-redux';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
// Date Picker IOS and Android
const DatePiker = () => {
  const [date, setDate] = useState(new Date());
  const [dateinput, setDateinput] = useState('');
  const [open, setOpen] = useState(false);

  var arr1 = [
    {name1: {name2: {id: 1, name3: 'rahul'}}},
    {name1: {name2: {id: 2, name3: 'rahul'}}},
    {name1: {name2: {id: 3, name3: 'rahul'}}},
    // {'id': 2, 'name': 'rahul'},
    // {'id': 3, 'name': 'sita'},
  ];
  var arr2 = [
    {id: 1, dob: '23'},
    {id: 2, dob: '65'},
    {id: 3, dob: '56'},
  ];
  var temp = [];

  function solve() {
    arr1.forEach(element => {
      var tempobj = {};
      arr2.forEach(elem => {
        if (element.name1.name2.id == elem.id) {
          tempobj = {...element.name1.name2, dob: elem.dob};
        }

        //console.log('========================',element.name1.name2.name3)
      });
      temp.push(tempobj);
    });

    console.log('===================================', temp);
  }

  return (
    <View>
      <CustomTextInput
        showSoftInputOnFocus={false}
        mode={'outlied'}
        outlineColor={'transparent'}
        activeOutlineColor={'red'}
        blurOnSubmit={false}
        outlineStyle
        value={dateinput}
        onChangeText={dateinput => setDateinput(dateinput)}
        rightIcon={
          <TextInput.Icon
            style={{}}
            onPress={() => {
              setOpen(true);
              solve();
            }}
            icon={'calendar'}
          />
        }
      />

      <DatePicker
        androidVariant="iosClone"
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setDate(date);
          setDateinput(date + '');
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};


// const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';


///= React native SnackBar

const MyComponent = ({
  visible,
  onPress,
  onToggleSnackBar,
  onDismissSnackBar,
}) => {
  return (
    <View style={styles.container}>
      <Button onPress={onToggleSnackBar} title={visible ? 'Hide' : 'Show'} />
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        Hey there! I'm a Snackbar.
      </Snackbar>
    </View>
  );
};

//main File

const Notifications = props => {
  const [value1, setValue1] = useState(null);
  const [visible, setVisible] = React.useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [press, setpress] = React.useState();
  const [productlist, setProductlist] = React.useState([]);
  const [data, setdata] = React.useState([]);

  const countdata = useSelector(state => {
    console.log('state.Reducers', state);
    return state?.Reducers;
  });
  let datacount = [...countdata];


  const closeMenu = () => {
    setVisible(false);
  };

  const showmenu = () => {
    setVisible(true);
    console.log('helloo');
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  const countriesname = [
    {label: 'React Naive', value: '1'},
    {label: 'Javascript', value: '2'},
    {label: 'Laravel', value: '3'},
    {label: 'PHP', value: '4'},
    {label: 'jQuery', value: '5'},
    {label: 'Bootstrap', value: '6'},
    {label: 'HTML', value: '7'},
    {label: 'CSS', value: '8'},
  ];

  return (
    <View style={{flex:1}}>
      <Provider>
      <CustomTopBar
          title={'ApnaKart'}
          onDismiss={closeMenu}
          showmenu={showmenu}
          datacount={datacount}
          visible={visible}
          RighticonPress={() => props.navigation.navigate('Addkart')}
          LeftIconPress={() => props.navigation.openDrawer()}
          searchIconPress={() => {}}
          LeftIcon={'menu'}
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
        />

        <ScrollView>
        <CustomButton
          onPress={() => props.navigation.openDrawer()}
          title="Open Drawer"
          greyButton
        />
    
      <View style={styles.main1}>
        {/* <MultiSelect
         
          items={items}
          uniqueKey="id"
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="#000000"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{color: '#CCC'}}
          submitButtonColor="#48d22b"
          submitButtonText="Submit"
        /> */}
      </View>

      <View style={styles.main1}>
        <Text>React native ProgressBar </Text>
        <ProgressBar progress={0.5} style={styles.progress} color={'skyblue'} />
      </View>

      <View>
        <DateGen />
      </View>

      <View style={styles.main1}>
        <Text>Date Picker</Text>

        <DatePiker />
      </View>

      <Button title="Show Date Picker" onPress={showDatePicker} />
      <View>
        <CustomDatePicker
          mode={'date'}
          isVisible={isDatePickerVisible}
          hideDatePicker={() => hideDatePicker()}
          handleConfirm={date => handleConfirm(date)}
        />
      </View>

      <View style={styles.main1}>
        <Text>Toptabnavigation for React native projects </Text>
        <CustomButton
          greyButton
          title="Toptabnavigation"
          onPress={() => props.navigation.navigate('Toptabnavigation')}
        />
      </View>

      <View style={styles.main1}>
        <Text>React native vector Icon </Text>
        <Icon name="rocket" size={30} color="#900" />
      </View>

      <View style={styles.main1}>
        <MyComponent
          visible={visible}
          onToggleSnackBar={onToggleSnackBar}
          onDismissSnackBar={onDismissSnackBar}
        />
      </View>

      <View style={styles.main1}>
        <KeyboardAwareScrollView>
          <CustomTextInput
            placeholder={'Email / Mobile'}
            //  value={Email}
            // autoFocus={true}
            returnKeyType="next"
            //  onChangeText={(Email) => CheckEmail(Email)}
            mode={'outlied'}
            outlineColor={'transparent'}
            activeOutlineColor={'red'}
            blurOnSubmit={false}
            outlineStyle
          />
        </KeyboardAwareScrollView>
      </View>

      <View style={{alignSelf: 'center', marginBottom: 20}}>
        <IMG color={'green'} />
      </View>
      </ScrollView>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonImageIconStyle: {
    // padding: 10,
    // margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    tintColor: 'black',
    marginStart: 30,
  },
  main1: {
    justifyContent: 'center',
    marginVertical: 50,
    width: '70%',
    marginHorizontal: 50,
  },
  progress: {
    height: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headingText: {
    padding: 8,
  },
});

export default Notifications;
