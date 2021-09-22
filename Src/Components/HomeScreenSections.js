import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Svg, { Circle, G } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const HomeScreenSections = () => {
  const navigation = useNavigation();
  const Size = 128;
  const StrokeWidth = 7;
  const center = Size / 2;
  const Radius = Size / 2 - StrokeWidth / 2;
  const CirecumFrence = 2 * Math.PI * Radius;
  const [Alphabet, setAlphabet] = useState("الحروفا لأبجدية");
  const [Numbers, setNumbers] = useState("الاعداد");
  let [Part1, setPart1] = useState(0);
  let [Part2, setPart2] = useState(0);
  let [Part3, setPart3] = useState(0);
 console.log("part1",Number(Part1))
  // get InitialValue
  const getData = async () => {
    try {
      //Part1
      const Part1 = await AsyncStorage.getItem("Part1");
      setPart1(Part1);
      //Part2
      const Part2 = await AsyncStorage.getItem("Part2");
      setPart2(Part2);
      //Part1
      const Part3 = await AsyncStorage.getItem("Part3");
      setPart3(Part3);

      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {}
  };

  useEffect(() => {
    getData();
    return () => {};
  }, []);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 20,
      }}
    >
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
            strokeDashoffset={
              CirecumFrence - (CirecumFrence * Part1 == 33.33 ? 33.33 : 44) / 100
            }
          />
        </Svg>
        <TouchableOpacity
          onPress={() => navigation.navigate("ShowScreenSections", Alphabet)}
          style={{
            position: "absolute",
            padding: 13,
          }}
        >
          <AntDesign name="star" size={100} color="orange" />
        </TouchableOpacity>
        <View style={{ alignItems: "center", paddingVertical: 10 }}>
          <Text style={{ fontSize: 18, color: "white" }}>{Alphabet}</Text>
        </View>
      </View>
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
    </View>
  );
};

export default HomeScreenSections;

const styles = StyleSheet.create({});
