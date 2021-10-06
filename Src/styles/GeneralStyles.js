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
});

export default GeneralStyles;
