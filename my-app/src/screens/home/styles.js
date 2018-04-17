const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30
  },
  logo: {
    position: "absolute",
    left: Platform.OS === "android" ? 60 : 40,
    top: Platform.OS === "android" ? 60 : 40,
    width: 280,
    height: 100
  },
  text: {
    color: "black",
    fontSize: 22,
    fontWeight:"bold",
    bottom: 6,
    marginTop: 5
  },
  signin: {
    position: 'relative',
    top:100
  }
};
