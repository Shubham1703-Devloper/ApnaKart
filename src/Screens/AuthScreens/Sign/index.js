import React, {useReducer, useState} from 'react';
import {Appbar, Dialog} from 'react-native-paper';
import DialogView from '../../../Components/DialogView';

import {
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Alert,
  ScrollView,
} from 'react-native';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import {Avatar, Button} from 'react-native-paper';
import {
  TextInput,
  HelperText,
  Paragraph,
  Portal,
  Provider,
} from 'react-native-paper';
import {userLogin} from '../../../Redux/Actions/Actions';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const Sign = props => {
  const [hidePass, setHidePass] = useState(true);
  const [hidePass1, setHidePass1] = useState(false);
  const [Name, setName] = useState(true);
  const [email, setemail] = React.useState('');
  const [Passward, setPassward] = React.useState('');
  const [cnfPassward, setcnfPassward] = React.useState('');
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);

  const dispatch = useDispatch();

  const CreateAccount = () => {
    if (email == '' || Passward == '') {
      Alert.alert('Please fill all the fields');
    } else {
      dispatch(userLogin({email:email,Passward:Passward}));
      props.navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        
       
      <Provider>
      <TouchableOpacity onPress={()=>props.navigation.goBack()} style={styles.arrowbackStyle}>
        <Icon name={'arrow-back'} size={30} color={'white'}/>
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container3}>
            <Avatar.Image
              size={80}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmFw0jctbuxfPI2kScpcU4ZRBJZjx6HR-3w&usqp=CAU',
              }}
            />
            <Text style={styles.logintext}>Sign Up</Text>

            <TextInput
              mode="outlined"
              label="Email or Phone Number"
              placeholder="Enter Email or Phone"
              right={<TextInput.Affix text="/25" />}
              maxLength={25}
              style={styles.textinput}
              onChangeText={email => setemail(email)}
            />

            <TextInput
              mode="outlined"
              placeholder="Create Passward"
              label="Create Passward"
              secureTextEntry={hidePass ? true : false}
              right={
                <TextInput.Icon
                  icon={!hidePass ? 'eye' : 'eye-off'}
                  onPress={() => setHidePass(!hidePass)}
                />
              }
              style={styles.textinput}
              value={Passward}
              onChangeText={Passward => setPassward(Passward)}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => CreateAccount()}>
              <Text style={styles.buttontext}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Provider>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  arrowbackStyle:{
    marginTop:20,
    position:'absolute',
    zIndex:1,
    backgroundColor:'skyblue',
    borderRadius:100,
  }
,
  container2: {
    paddingHorizontal: 40,
    // marginVertical: 20,
    // marginHorizontal:20,
    flex:1,

    backgroundColor: 'white',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,

    // elevation: 4,
    // borderRadius: 5,
  },

  container3:{
   alignItems:'center',
   paddingVertical: 60,
  },
  logintext: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
  },
  textinput: {
    width: '100%',
    marginTop: 20,
  },
  forgottext: {
    marginTop: 10,
    marginLeft: 130,
    alignSelf: 'flex-end',
  },
  button: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    borderRadius: 5,
    marginTop: 80,
    marginBottom: 56,
  },
  buttontext: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  Signbutton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignView: {
    flexDirection: 'row',
  },
  text: {
    color: 'skyblue',
  },
  Dialog: {},
});

export default Sign;
