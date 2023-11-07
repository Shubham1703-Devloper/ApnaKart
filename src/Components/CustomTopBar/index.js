// Example of Animated Splash Screen in React Native
// https://aboutreact.com/animated-splash-screen/

// import React in our code
import React, {useState, useEffect, Children} from 'react';
import {TextInput, Searchbar, Provider, Appbar, Menu} from 'react-native-paper';
// import all the components we are going to use
import Share from 'react-native-share';
import {
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import Button from '../Button';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import styles from './styles';
const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
//import MultiSelectComponent from "react-native-element-dropdown/lib/typescript/components/MultiSelect";

// interface Props {
//   item?: any;
//   path?: any;
//   fileName?: string | undefined;
//   uri?:  string | undefined;
//   message?: string | undefined;
//   subject?:  string | undefined;
//   }
const CustomTopBar = ({
  title,
  MenuItem,
  searchIconPress,
  datacount,
  RighticonPress,
  visible,
  showmenu,
  onDismiss,
  LeftIconPress,
  LeftIcon,
  route,
  path,
}) => {
  return (
    <View style={styles.innercontainer}>
      <Appbar.Header style={styles.Topbarshadow}>
        <Appbar.Action
          icon={LeftIcon == 'menu' ? 'menu' : 'arrow-left'}
          onPress={LeftIconPress}
          size={28}
          style={{paddingLeft: 3}}
        />
        <Appbar.Content title={title} subtitle={'India'} />
        {route == 'Dashboard' ? (
          <Appbar.Action icon={'magnify'} onPress={searchIconPress} />
        ) : null}

        <View style={styles.menuStyle}>
          {datacount.length !== 0 ? (
            <View style={styles.shopingkart}>
              <Text style={styles.rediconText}>{datacount.length}</Text>
            </View>
          ) : null}

          <Appbar.Action
            icon="cart-heart"
            // iconColor="black"
            onPress={RighticonPress}
          />
        </View>

        <View style={styles.menuStyle}>
          <Menu
            visible={visible}
            onDismiss={onDismiss}
            anchor={<Appbar.Action icon={MORE_ICON} onPress={showmenu} />}>
            {MenuItem}
          </Menu>
        </View>
      </Appbar.Header>
    </View>
  );
};

export default CustomTopBar;
