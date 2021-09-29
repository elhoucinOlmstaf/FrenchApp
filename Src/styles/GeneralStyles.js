import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
const GeneralStyles = StyleSheet.create({
  TextTitle: {
    color: "white",
    fontWeight: "bold",
    fontStyle: "italic",
  },
});

export default GeneralStyles;
