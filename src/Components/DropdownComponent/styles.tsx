import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;
interface Style {
  leble1: any;
  leble: any;
  leble2: any;
  lebleView1: any;
  lebleView2: any;
  lebleView3: any;
  lebleViewcolor1:any;
  lebletext:any;
}
export default StyleSheet.create({
 
  dropdown: {
    borderRadius: 12,
     padding: 8,
    backgroundColor: '#E2E9F3',
  },
  outlineStyle:{
   borderWidth:1.2,
  },
  icon: {
    marginRight: 5,
    width: 18,
    height: 18,
  },
 
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 20,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
},
iconStyle: {
  width: 20,
  height: 20,
},
inputSearchStyle: {
  height: 40,
  fontSize: 16,
},

selectedStyle: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 14,
  backgroundColor: 'white',
  shadowColor: '#000',
  marginTop: 8,
  marginRight: 12,
  paddingHorizontal: 12,
  paddingVertical: 8,
  shadowOffset: {
      width: 0,
      height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,

  elevation: 2,
},
});
