import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle, G } from "react-native-svg";

import React from "react";

const SvgCircul = () => {
    const Size = 128;
    const StrokeWidth = 2;
    const center = Size / 2;
    const Radius = Size / 2 - StrokeWidth / 2;
    const CirecumFrence = 2 * Math.PI * Radius;
  return (
    <View>
      <Svg height={Size} width={Size}>
        <Circle
          cx={center}
          cy={center}
          r={Radius}
          stroke="blue"
          strokeWidth={StrokeWidth}
        />
        <Circle
          cx={center}
          cy={center}
          r={Radius}
          stroke="tomato"
          strokeWidth={StrokeWidth}
          strokeDasharray={CirecumFrence}
          strokeDashoffset={CirecumFrence - (CirecumFrence * 25) / 100}
        />
      </Svg>
    </View>
  );
};

export default SvgCircul;

const styles = StyleSheet.create({});
