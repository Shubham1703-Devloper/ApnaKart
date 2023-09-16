import React, { PureComponent, useState } from "react";
import {
   Platform,
   View,
   TouchableOpacity,
   Text,
   Pressable,
   FlatList,
   ScrollView,
   Image,
} from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomSidebar from "../CustomSlider";
import side_menu_home from '../../lib/images'
import styles from './styles'
import DashBoard from "../../Screens/DashboardTab/Dashboard";



const Drawer = createDrawerNavigator();

const DrawerNavigation = (props) => {
   return (
      <Drawer.Navigator
         useLegacyImplementation={true}
         drawerContent={(props) => <CustomSidebar {...props} />}
         screenOptions={{
            swipeEnabled: true,
            drawerType: "slide",
            headerShown: false,
            drawerActiveBackgroundColor: '#515256',
            drawerStyle: {
               backgroundColor: '#393A3F',
               width: windowWidth.windowWidth / 1.25,
            },

            drawerLabelStyle: {
               fontSize: 16,
               fontWeight: 'bold',
               color: '#C6CCD4'
            }


         }}


      >
         <Drawer.Screen name="Dashboard" component={DashBoard} options={{
            title: 'Dashboard',
            drawerIcon: ({ focused, size }) => (
               <Image style={styles.imges}
                  source={side_menu_home.side_menu_home}
               />
            ),
         }} />
        
      </Drawer.Navigator>
   );
};

export default DrawerNavigation;
