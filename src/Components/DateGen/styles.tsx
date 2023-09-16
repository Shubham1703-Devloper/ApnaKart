import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;
type Style = {
  leble1: any;
  leble: any;
  leble2: any;
  lebleView1: any;
  lebleView2: any;
  lebleView3: any;
  lebleViewcolor1:any;
  lebletext:any;
}

export default StyleSheet.create<Style>({
  leble1: {
    fontSize: 11,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    tintColor: "#B37616",
  },
  leble: {
    fontSize: 11,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    tintColor: "#F5351B",
  },
  leble2: {
    fontSize: 11,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    tintColor: "#219769",
  },
  lebleView1: {
    backgroundColor: "#F9DCD5",
    borderRadius: 20,
    paddingLeft: 13,
    paddingRight: 13,
  
    alignItems: "center",
    justifyContent: "center",
    height: 26,
  },
  lebleView2: {
    backgroundColor: "#FFE68F",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    paddingLeft: 13,
    paddingRight: 13,
    height: 26,
  },
  lebleView3: {
    backgroundColor: "#C7ECD9",
    borderRadius: 20,
    paddingLeft: 13,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 13,
    height: 26,
  },

  lebleViewcolor1:{
    backgroundColor: "#F14422",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    paddingLeft: 13,
    paddingRight: 13,
    height: 26,
  },

  lebletext:{
    fontSize: 11,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    tintColor: "white",
  }
});
