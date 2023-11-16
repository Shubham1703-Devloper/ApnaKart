import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innercontainer: {
    zIndex: 1,
  },

  ListFooterComponent: {
    marginBottom: 20,
  },
  imagestyle: {
    width: '60%',
    height: 300,
  },
  imageViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginTop: 20,
  },

  ///nodata found Text

  nodataStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 20,
    marginBottom:20,
  },
  midbuttonView: {
    // zIndex: 1,
    width: '100%',
    height: 60,
    // position: 'absolute',
    flexDirection: 'row',
    backgroundColor: 'green',
    // bottom: 0,
  },

  midBookbutton: {
    // zIndex: 1,
    width: '50%',
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },

  midpessengerbutton: {
    // zIndex: 1,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6e3d',
  },

  deviderStyle: {
    marginBottom: 10,
  },
  nodataTextStyle: {
    fontSize: 18,
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

  TittleStyle: {
    fontSize: 16,
    color: 'black',
  },
  PriceStyle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  ItemDesView: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  starContainerStyle: {
    alignSelf: 'flex-start',
    paddingTop: 0,
  },
  ratingViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  Type: {
    fontSize: 16,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  SimilarType:{
    fontSize: 16,
    marginVertical: 5,
    fontWeight: 'bold',
    marginHorizontal:10
  },
  imagestyle: {
    width: '80%',
    height: 300,
  },

  ///item styles

  main: {
    width: '45%',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  imageItemstyle: {
    width: '100%',
    height:160,
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
  redbuttonStyle: {
    backgroundColor: '#ff6e3d',
    borderColor: '#ff6e3d',
  },
  titleStyle: {
    fontSize: 14,
  },
  seeMoreText:{
    color:'grey',
    fontWeight:'bold'
  }
});
