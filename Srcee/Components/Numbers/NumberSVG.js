import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Svg, { Circle, G } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const NumberSVG = () => {
    const navigation = useNavigation();
    const Size = 128;
    const StrokeWidth = 7;
    const center = Size / 2;
    const Radius = Size / 2 - StrokeWidth / 2;
    const CirecumFrence = 2 * Math.PI * Radius;
    const [Numbers, setNumbers] = useState("الاعداد");
    return (
        <View>
        <Svg height={Size} width={Size}>
          <Circle
            cx={center}
            cy={center}
            r={Radius}
            stroke="#70727f"
            strokeWidth={StrokeWidth}
          />
          <Circle
            cx={center}
            cy={center}
            r={Radius}
            stroke="#fbcf16"
            strokeWidth={StrokeWidth}
            strokeDasharray={CirecumFrence}
            strokeDashoffset={CirecumFrence - (CirecumFrence * -25) / 100}
          />
        </Svg>
        <TouchableOpacity
          onPress={() => navigation.navigate("ShowScreenSections", Numbers)}
          style={{
            position: "absolute",
            padding: 13,
          }}
        >
          <AntDesign name="home" size={100} color="orange" />
        </TouchableOpacity>
        <View style={{ alignItems: "center", paddingVertical: 10 }}>
          <Text style={{ fontSize: 18, color: "white" }}> {Numbers}</Text>
        </View>
      </View>
    )
}

export default NumberSVG

