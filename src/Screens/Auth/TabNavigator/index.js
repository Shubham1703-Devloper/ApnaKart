import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState, useEffect } from "react";
// import all the components we are going to use
import { View, Text, Image } from "react-native";

import notifications1 from "../../../lib/images";
import notifications_h_c from "../../../lib/images";

import dashboard_h_c from "../../../lib/images";
import bottom_dashboard from "../../../lib/images";
import styles from "./styles";
import DashBoard from "../../DashboardTab/Dashboard";
import Imagepicker from "../../Imagepicker";
import Notifications from "../../DashboardTab/Notifications";
import Account from "../../DashboardTab/Account/Account";



const Tab = createBottomTabNavigator()

const Tabnavigator = () => {
  const [press, setPress] = useState(false)
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarStyle: { height: 65 } }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashBoard}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.text : styles.text1}>
              Dashboard
            </Text>
          ),

          tabBarIcon: ({ focused }) =>
            //   {focused ? (
            //     <Image
            //       style={styles.icon1}
            //       resizeMode={"contain"}
            //       source={dashboard_h_c.dashboard_h_c}
            //     />
            //   ) : (

            //     <Image
            //       style={styles.icon}
            //       resizeMode={"contain"}
            //       source={bottom_dashboard.bottom_dashboard}
            //     />
            //   )}
            focused ? (
              <Image
                style={styles.icon1}
                resizeMode={"contain"}
                source={dashboard_h_c.dashboard_h_c}
              />
            ) : (
              <Image
                style={styles.icon}
                resizeMode={"contain"}
                source={bottom_dashboard.bottom_dashboard}
              />
            ),
        }}
      />
    
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.text : styles.text1}>
              Notifications
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            focused ? (
              <Image
                style={styles.icon1}
                resizeMode={"contain"}
                source={notifications_h_c.notifications_h_c}
              />
            ) : (
              <Image
                style={styles.icon}
                resizeMode={"contain"}
                source={notifications1.notifications1}
              />
            )
          ),
        }}
      />

<Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.text : styles.text1}>
              Account
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            focused ? (
              <Image
                style={styles.icon1}
                resizeMode={"contain"}
                source={notifications_h_c.notifications_h_c}
              />
            ) : (
              <Image
                style={styles.icon}
                resizeMode={"contain"}
                source={notifications1.notifications1}
              />
            )
          ),
        }}
      />

    </Tab.Navigator>
  );
};
export default Tabnavigator