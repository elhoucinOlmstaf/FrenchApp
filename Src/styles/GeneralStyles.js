import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
const GeneralStyles = StyleSheet.create({
  TextTitle: {
    fontSize: 19,
    color: "white",
    fontWeight: "bold",
  },
  CircleButton: {
    position: "absolute",
    left: 14,
    top: 14,
    backgroundColor: "#0e9497",
    borderRadius: 100,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  SvgImage: {
    width: 65,
    height: 65,
  },
  PracticeBoxContainer:{
    backgroundColor: "#36415f",
    padding: 30,
    alignItems: "center",
    alignSelf: "center",
    width: width / 1.1,
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "space-between",
  } ,
  PracticeContainer:{
    backgroundColor: "#1f233c",
    width: width,
    height: height,
    justifyContent: "center",
  }

});

export default GeneralStyles;
