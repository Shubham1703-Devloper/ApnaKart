import { StyleSheet, Dimensions } from "react-native"

const screenWidth = Dimensions.get("screen").width
const screenHeight = Dimensions.get("screen").height

export default styles = StyleSheet.create({
  SimilarType:{
    fontSize: 16,
    marginVertical: 5,
    fontWeight: 'bold',
    marginHorizontal:10,
    flexDirection:'row'
  },

  container:{
    flex:1,
  }

})
