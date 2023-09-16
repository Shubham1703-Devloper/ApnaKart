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
      <Provider>
        <ScrollView style={styles.container1}>
          <DialogView
            visible={visible}
            message={'Congratulations!'}
            description={'You have Complete successfull Sign Up'}
            hideDialog={() => {
              setVisible(false);
            }}
            buttontext={'Continue'}
            back={() => {
              CreateAccount()
            }}
          />

          <View style={styles.container2}>
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
              onPress={() => showDialog()}>
              <Text style={styles.buttontext}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Provider>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blurcontainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e3e2e1',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#e3e2e1',
    // justifyContent: 'center',
  },
  container2: {
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 20,
    paddingVertical: 60,
    alignItems: 'center',
    backgroundColor: 'white',
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    borderRadius: 5,
  },
  logintext: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
  },
  textinput: {
    width: '90%',
    marginTop: 20,
  },
  forgottext: {
    marginTop: 10,
    marginLeft: 130,
    alignSelf: 'flex-end',
  },
  button: {
    height: 50,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    borderRadius: 5,
    marginTop: 80,
    marginBottom: 20,
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
