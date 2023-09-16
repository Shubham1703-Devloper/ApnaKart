import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;
export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  side: {
    resizeMode: "center",
    width: windowWidth / 1.35555,
    height:2,
    marginTop:10,
    marginBottom:20,
    alignSelf: "center",
    backgroundColor:'#5D5F65'
  },
  profile: {
    flexDirection: "row",
    justifyContent:'flex-start',
    alignItems:'center'
  },
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  profilename:{
      fontSize:18,
      fontWeight:'bold',
      color:'white'
  },
  walletmoney:{
      color:'#FF9A41',
      fontSize:18,
      fontWeight:'bold',
  },
  close:{
      width:30,
      height:30,
  },
  closeView:{
      marginTop:30,
      marginRight:10,
      justifyContent:'center',
      alignItems:'flex-end'
  }
});
