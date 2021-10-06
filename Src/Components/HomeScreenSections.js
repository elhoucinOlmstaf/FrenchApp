import React from "react";
import { View, Dimensions } from "react-native";
//--------------------------------------------------------------
import AlphabetSVG from "./Alphabet/AlphabetSVG";
import NumberSVG from "./Numbers/NumberSVG";
//------------------------------------------------------------
const HomeScreenSections = () => {
  const { width } = Dimensions.get("window");
  const Size = width / 3.3;
  const StrokeWidth = 7;
  const center = Size / 2;
  const Radius = Size / 2 - StrokeWidth / 2;
  const CirecumFrence = 2 * Math.PI * Radius;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 20,
      }}
    >
      <View>
        <AlphabetSVG
          center={center}
          Radius={Radius}
          Size={Size}
          StrokeWidth={StrokeWidth}
          CirecumFrence={CirecumFrence}
        />
      </View>
      <View>
        <NumberSVG
          center={center}
          Radius={Radius}
          Size={Size}
          StrokeWidth={StrokeWidth}
          CirecumFrence={CirecumFrence}
        />
      </View>
    </View>
  );
};

export default HomeScreenSections;
