import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Svg, { Circle, G } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
//--------------------------------------------------------------
import AlphabetSVG from "./Alphabet/AlphabetSVG";
import NumberSVG from "./Numbers/NumberSVG";
//------------------------------------------------------------
const HomeScreenSections = () => {
  
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 20,
      }}
    >
      <View>
        <AlphabetSVG />
      </View>
      <View>
        <NumberSVG />
      </View>
    </View>
  );
};

export default HomeScreenSections;

const styles = StyleSheet.create({});
