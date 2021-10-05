import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AlphabetSVG = () => {
  const navigation = useNavigation();
  const Size = 128;
  const StrokeWidth = 7;
  const center = Size / 2;
  const Radius = Size / 2 - StrokeWidth / 2;
  const CirecumFrence = 2 * Math.PI * Radius;
  const [Alphabet, setAlphabet] = useState("الحروف لأبجدية");
  let [GeneralValues, setGeneralValues] = useState(0);
  // get data from local storage
  const getData = async () => {
    const response = await AsyncStorage.getItem("AlphabetPracticeValue");
    setGeneralValues(response);
  };

  // getting the data from local storage when screen is focused
  useFocusEffect(
    useCallback(() => {
      getData();
      return () => getData();
    }, [])
  );

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
          strokeDashoffset={
            CirecumFrence - (CirecumFrence * GeneralValues) / 100
          }
        />
      </Svg>
      <TouchableOpacity
        onPress={() => navigation.navigate("ShowScreenSections", Alphabet)}
        style={{
          position: "absolute",
          left: 14,
          top: 14,
          backgroundColor: "red",
          borderRadius: 100,
          width: 100,
          height: 100,
        }}
      >
        <AntDesign
          name="star"
          size={70}
          color="orange"
          style={{
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            alignContent:'center'
          }}
        />
      </TouchableOpacity>
      <View style={{ alignItems: "center", paddingVertical: 10 }}>
        <Text style={{ fontSize: 18, color: "white" }}>{Alphabet}</Text>
      </View>
    </View>
  );
};

export default AlphabetSVG;

const styles = StyleSheet.create({});
