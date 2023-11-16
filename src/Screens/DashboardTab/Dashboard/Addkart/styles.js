import { StyleSheet, Dimensions } from "react-native"

const screenWidth = Dimensions.get("screen").width
const screenHeight = Dimensions.get("screen").height

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innercontainer: {
    zIndex: 1,
  },
  shopingkart:{
    backgroundColor: '#fc4e03',
    borderRadius: 50,
    height: 12,
    width: 12,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 8,
    top: 5,
  },

  FlatListView:{
    paddingTop:0,
    paddingBottom:60,
    // alignItems:'center',
    width:'100%'
  }
,

nodataStyle:{
  justifyContent:'center',
  alignItems:'center',
  marginTop:20
}
  ,

  nodataTextStyle:{
    fontSize:18
  },
  ///item styles


  main:{
    width: '45%',
    margin: 10,
    padding:10,
    borderRadius:10,
    backgroundColor:'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  imagestyle:{
    width:'100%',
    height:160,
  },
  TittleStyle:{
    fontSize:16,
    color:'black',
  },
  PriceStyle:{
    fontSize:18,
    color:'black',
    fontWeight:'bold'
  },
  buttonStyle:{
    backgroundColor: '#fc4e03',
    borderColor:'#fc4e03'
  },
  titleStyle:{
    fontSize:14
  }
,




 

  //Bottom Button Styles----------------
  TrainnumberText: {
    fontSize: 18,
    color: 'white',
  },
  TrainameText: {
    fontSize: 16,
    color: 'balck',
    fontWeight: 'bold',
  },

  buttonView: {
    zIndex: 1,
    width: '100%',
    height: 60,
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: 'green',
    bottom: 0,
  },
  pessengerbutton: {
    zIndex: 1,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6e3d',
  },
  Bookbutton: {
    zIndex: 1,
    width: '50%',
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextColor: {
    color: 'white',
  },
  bottombutton: {
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: '#0b9e06',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },



})
