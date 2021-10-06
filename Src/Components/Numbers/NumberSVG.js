import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Svg, { Circle, G } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";
import GeneralStyles from "../../styles/GeneralStyles";
const NumberSVG = (props) => {
  const navigation = useNavigation();

  const [Numbers, setNumbers] = useState("الاعداد");
  return (
    <View>
      <Svg height={props.Size} width={props.Size}>
        <Circle
          cx={props.center}
          cy={props.center}
          r={props.Radius}
          stroke="#70727f"
          strokeWidth={props.StrokeWidth}
        />
        <Circle
          cx={props.center}
          cy={props.center}
          r={props.Radius}
          stroke="#fbcf16"
          strokeWidth={props.StrokeWidth}
          strokeDasharray={props.CirecumFrence}
          strokeDashoffset={
            props.CirecumFrence - (props.CirecumFrence * -25) / 100
          }
        />
      </Svg>
      <TouchableOpacity
        onPress={() => navigation.navigate("ShowScreenSections", Numbers)}
        style={GeneralStyles.CircleButton}
      >
        <Image
          source={require("../../Images/Numbers.png")}
          style={{ width: 80, height: 80 }}
        />
      </TouchableOpacity>
      <View style={{ alignItems: "center", paddingVertical: 10 }}>
        <Text style={{ fontSize: 18, color: "white" }}> {Numbers}</Text>
      </View>
    </View>
  );
};

export default NumberSVG;
