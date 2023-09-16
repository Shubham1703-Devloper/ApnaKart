// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from "react";

import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import side_menu_seprator from "../../lib/images";
import side_menu_clsoe from "../../lib/images";
import styles from "./styles";
import { Divider } from "react-native-paper";
import { useSelector } from "react-redux";

const CustomSidebar = (props) => {
  const BASE_PATH =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/";
  const proileImage = "react_logo.png";


  return (
    <SafeAreaView style={styles.container}>
      {/*close button */}

      <View style={styles.closeView}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <Image
            source={side_menu_clsoe.side_menu_clsoe}
            style={styles.close}
          />
        </TouchableOpacity>
      </View>

      {/*Top Large Image */}
      <View
        style={styles.profile}
      >
        <TouchableOpacity onPress={() => {
          // props.navigation.navigate("MyAccount");
        }}>
          <Image
            source={{ uri: BASE_PATH + proileImage }}
            style={styles.sideMenuProfileIcon}
          />
        </TouchableOpacity>

        <View>
          <Text style={styles.profilename}>Andrew Stuart</Text>
          <TouchableOpacity>
            <Text style={styles.walletmoney}>$200</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Divider style={styles.side} />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {/* <DrawerItem
          label="Visit Us"
          onPress={() => Linking.openURL("https://aboutreact.com/")}
        />
        <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL("https://aboutreact.com/");
            }}
          >
            Rate Us
          </Text>
          <Image
            source={{ uri: BASE_PATH + "star_filled.png" }}
            style={styles.iconStyle}
          />
        </View> */}
      </DrawerContentScrollView>
      {/* <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          color: "grey",
        }}
      >
        www.aboutreact.com
      </Text> */}
    </SafeAreaView>
  );
};

export default CustomSidebar;
