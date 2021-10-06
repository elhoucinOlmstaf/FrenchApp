import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Svg, { Circle } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import GeneralStyles from "../../styles/GeneralStyles";

const AlphabetSVG = (props) => {

  const navigation = useNavigation();
  const [Alphabet, setAlphabet] = useState("الحروف لأبجدية");
  let [AlphabetGeneralValues, setAlphabetGeneralValues] = useState(0);
  // get data from local storage
  const getData = async () => {
    const response = await AsyncStorage.getItem("AlphabetPracticeValue");
    setAlphabetGeneralValues(response);
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
            props.CirecumFrence - (props.CirecumFrence * AlphabetGeneralValues) / 100
          }
        />
      </Svg>
      <TouchableOpacity
        onPress={() => navigation.navigate("ShowScreenSections", Alphabet)}
        style={GeneralStyles.CircleButton}
      >
        <Image
          source={require("../../Images/alphabetImage.png")}
          style={GeneralStyles.SvgImage}
        />
      </TouchableOpacity>
      <View style={{ alignItems: "center", paddingVertical: 10 }}>
        <Text style={GeneralStyles.TextTitle}>{Alphabet}</Text>
      </View>
    </View>
  );
};

export default AlphabetSVG;

const styles = StyleSheet.create({});
