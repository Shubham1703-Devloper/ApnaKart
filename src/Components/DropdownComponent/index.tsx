// // Example of Animated Splash Screen in React Native
// // https://aboutreact.com/animated-splash-screen/

// // import React in our code
// import React, {useState, useEffect} from 'react';
// import {TextInput, Button, Searchbar} from 'react-native-paper';
// // import all the components we are going to use

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
// import styles from './styles';
// import top_header from '../../lib/images';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
// import {onChange} from 'react-native-reanimated';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// //import MultiSelectComponent from "react-native-element-dropdown/lib/typescript/components/MultiSelect";

// interface Props {
// children?: any;
// multipleselect?: boolean;
// value1?: any;
// countriesname?: any;
// onChange?: any;
// DATA?: any;
// item?: any;
// }

// const DropdownComponent: React.FC<Props> = ({
//   multipleselect,
//   value1,
//   countriesname,
//   onChange,DATA,
// }) => {

//   const [isFocus, setIsFocus] = useState(false);

//   const [selected, setSelected] = React.useState<string[]>([]);

//   const renderDataItem = (item:any) => {
//     return (
//         <View style={styles.item}>
//             <Text style={styles.selectedTextStyle}>{item.label}</Text>
//             <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
//         </View>
//     );
//   };
  

//   return (
//     <>
//       {multipleselect ? (
//         <MultiSelect
//         style={[
//           styles.dropdown,
//           isFocus && {borderColor: '#F14422', borderWidth: 1.2},
//         ]}
//         placeholderStyle={styles.placeholderStyle}
//         selectedTextStyle={styles.selectedTextStyle}
//         inputSearchStyle={styles.inputSearchStyle}
//         iconStyle={styles.iconStyle}
//         data={countriesname}
//         labelField="label"
//         valueField="value"
//         placeholder="Multi Select item"
//         value={selected}
//         search
//         onFocus={() => setIsFocus(true)}
//         onBlur={() => setIsFocus(false)}
//         searchPlaceholder="Search..."
//         onChange={item => {
//             setSelected(item);
//         }}
//         renderLeftIcon={() => (
//             <AntDesign
//                 style={styles.icon}
//                 color="black"
//                 name="Safety"
//                 size={20}
//             />
//         )}
//         renderItem={renderDataItem}
//         renderSelectedItem={(item, unSelect) => (
//             <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
//                 <View style={styles.selectedStyle}>
//                     <Text style={styles.textSelectedStyle}>{item.label}</Text>
//                     <AntDesign color="black" name="delete" size={17} />
//                 </View>
//             </TouchableOpacity>
//         )}
//     />
//       ) : (
//         <Dropdown
//           style={[
//             styles.dropdown,
//             isFocus && {borderColor: '#F14422', borderWidth: 1.2},
//           ]}
//           placeholderStyle={styles.placeholderStyle}
//           selectedTextStyle={styles.selectedTextStyle}
//           inputSearchStyle={styles.inputSearchStyle}
//           iconStyle={styles.iconStyle}
//           data={countriesname}
//           search
//           // maxHeight={300}
//           labelField="label"
//           valueField="value"
//           placeholder="Country"
//           searchPlaceholder="Search..."
//           onFocus={() => setIsFocus(true)}
//           onBlur={() => setIsFocus(false)}
//           value={value1}
//           onChange={item => {
//             setIsFocus(false);
//           }}

//           renderItem={renderDataItem}
//         />
//       )}
//     </>
//   );
// };

// export default DropdownComponent;
