import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export default styles = StyleSheet.create({

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
  },
 
  Topbarshadow:{
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 6,
  }

});
