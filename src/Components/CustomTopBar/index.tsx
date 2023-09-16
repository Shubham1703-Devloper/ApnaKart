// // Example of Animated Splash Screen in React Native
// // https://aboutreact.com/animated-splash-screen/

// // import React in our code
// import React, {useState, useEffect, Children} from 'react';
// import {TextInput, Searchbar, Provider, Appbar} from 'react-native-paper';
// // import all the components we are going to use
// import Share from 'react-native-share';
// import {
//   View,
//   Text,
//   Image,
//   Dimensions,
//   ImageBackground,
//   Pressable,
//   TouchableOpacity,
//   ScrollView,
//   StatusBar,
//   Alert,
// } from 'react-native';
// import Button from '../Button';
// //import MultiSelectComponent from "react-native-element-dropdown/lib/typescript/components/MultiSelect";


// interface Props {
//   item?: any;
//   path?: any;
//   fileName?: string | undefined;
//   uri?:  string | undefined;
//   message?: string | undefined;
//   subject?:  string | undefined;
//   }
//   const CustomTopBar: React.FC<Props>= ({ item,path
// }) => {

  
   
//    return(
//     <View>
//     <Provider>
//           <Appbar.Header>
//             <Appbar.Action
//               icon="menu"
//               onPress={() => props.navigation.openDrawer()}
//               size={28}
//               style={{paddingLeft: 3}}
//             />
//             <Appbar.Content title="ApnaKart" subtitle={'India'} />
//             <Appbar.Action icon="magnify" onPress={() => {}} />
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'center',
//               }}>
//               <View
//                 style={styles.shopingkart}>
//                 <Text style={{fontSize: 8, color: 'white', fontWeight: 'bold'}}>
//                   7
//                 </Text>
//               </View>
//               <Appbar.Action
//                 icon="cart-heart"
//                 // iconColor="black"
//                 onPress={() =>  props.navigation.navigate('Addkart')}
//               />
//             </View>

//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'center',
//               }}>
//               <Menu
//                 visible={false}
//                 onDismiss={closeMenu}
//                 anchor={<Appbar.Action icon={MORE_ICON} onPress={showmenu} />}>
//                 <Menu.Item onPress={() => {}} title="Setting" />
//                 <Menu.Item onPress={() => {}} title="Search" />
//                 <Menu.Item onPress={() => {}} title="Filter" />
//                 <Menu.Item onPress={() => {}} title="Help" />
//                 <Menu.Item onPress={() => {}} title="FeedBack" />
//                 <Menu.Item onPress={() => {}} title="Log Out" />
//               </Menu>
//             </View>
//           </Appbar.Header>
//         </Provider>
//     </View>
//    )
 
// };

// export default CustomTopBar;
