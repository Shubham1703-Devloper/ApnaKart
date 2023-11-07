import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innercontainer: {
    zIndex:1,
  },
  shopingkart: {
    backgroundColor: '#fc4e03',
    borderRadius: 50,
    height: 15,
    width: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 6,
    top: 3,
  },
  rediconText:{
    fontSize: 10, color: 'white', fontWeight: 'bold'
  },
  menuStyle:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  FlatListView: {
    // paddingTop: 65,
    // paddingHorizontal:10,
    // alignItems:'center'
  },
 
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  dateTextStyle: {
    fontSize: 16,
    color: 'black',
    marginStart: 15,
    fontWeight: 'bold',
  },
  searchSection: {
    marginTop: 20,
    marginStart: 15,
    width: '43%',
    // backgroundColor: 'red',
  },
  dateSectionStyle: {
    width: '43%',
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDF1F7',
    borderColor: '#fff',
    height: 50,
    borderRadius: 5,
    marginTop: 3,
  },
  buttonImageIconStyle: {
    tintColor: 'black',
    padding: 10,
    marginStart: 30,
    marginHorizontal: 5,
    marginVertical: 10,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    marginStart: -55,
    color: 'grey',
  },
  buttonEndStyle: {
    flexDirection: 'row',
    marginStart: 15,
    marginTop: 20,
  },
  filterTextStyle: {
    fontSize: 25,
    color: 'black',
    flex: 1,
    fontWeight: 'bold',
  },
  item: {
    height: screenHeight / 10,
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    marginStart: 10,
    marginTop: 20,
    backgroundColor: 'blue',
  },

  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  ///item styles

  main: {
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
  imagestyle: {
    width: '100%',
    height: 200,
  },
  TittleStyle: {
    fontSize: 16,
    color: 'black',
  },
  PriceStyle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  buttonStyle: {
    backgroundColor: '#1486e9',
    borderColor: '#1486e9',
  },
  titleStyle: {
    fontSize: 14,
  },



///nodata found Text


  nodataStyle:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    marginBottom:10
  }
    ,
  
    nodataTextStyle:{
      fontSize:18
    },

    ListFooterComponent:{
      marginBottom:70
    }
});
