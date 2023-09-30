import React, {PureComponent, useState} from 'react';
import {
  Platform,
  View,
  TouchableOpacity,
  Text,
  Pressable,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import side_menu_home from '../../../lib/images';

import styles from './styles';
import DashBoard from '../../DashboardTab/Dashboard';
import CustomSidebar from '../../../Components/CustomSlider';
import windowWidth from '../../../Components/Dimensions/Dimensions';
import TabNavigator from '../TabNavigator';
import Notifications from '../../DashboardTab/Notifications';
import Imagepicker from '../../Imagepicker';
import {StackActions} from '@react-navigation/native';
import Account from '../../DashboardTab/Account/Account';
import { useAuthContext } from '../../../Context/AuthContext';
import { useDashboardContext } from '../../../Context/DashboardContext';
const Drawer = createDrawerNavigator();

const DrawerNavigation = props => {

  return (
    <Drawer.Navigator
      //useLegacyImplementation={true}
      drawerContent={props => <CustomSidebar {...props} />}
      screenOptions={{
        drawerPosition: 'left',
        swipeEnabled: true,
        drawerType: 'front',
        headerShown: false,
        drawerActiveBackgroundColor: '#515256',
        drawerStyle: {
          backgroundColor: '#393A3F',
          width: windowWidth.windowWidth / 1.25,
        },

        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          color: '#C6CCD4',
        },
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={TabNavigator}
        options={{
          title: 'Dashboard',
          drawerIcon: ({focused, size}) => (
            <Image
              style={styles.imges}
              source={side_menu_home.side_menu_home}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Your Acount"
        component={Account}
        options={{
          title: 'Your Acount',
          drawerIcon: ({focused, size}) => (
            <Image
              style={styles.imges}
              source={side_menu_home.side_menu_home}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Your Orders"
        component={Notifications}
        options={{
          title: 'Your Orders',
          drawerIcon: ({focused, size}) => (
            <Image
              style={styles.imges}
              source={side_menu_home.side_menu_home}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{
          title: 'Notifications',
          drawerIcon: ({focused, size}) => (
            <Image
              style={styles.imges}
              source={side_menu_home.side_menu_home}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Privacy & Policy"
        component={Notifications}
        options={{
          title: 'Privacy & Policy',
          drawerIcon: ({focused, size}) => (
            <Image
              style={styles.imges}
              source={side_menu_home.side_menu_home}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={Notifications}
        options={{
          title: 'Settings',
          drawerIcon: ({focused, size}) => (
            <Image
              style={styles.imges}
              source={side_menu_home.side_menu_home}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Log Out"
        component={() => {
            props.navigation.dispatch(StackActions.popToTop());
        }}
        options={{
          title: 'Log Out',
          drawerIcon: ({focused, size}) => (
            <Image
              style={styles.imges}
              source={side_menu_home.side_menu_home}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
