import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import ListeningData from "../../Data/NumbersData/ListeningData";
import ReadingData from "../../Data/NumbersData/ReadingData";
import PracticeCompletedAnimation from "../../LottieComp/PracticeCompletedAnimation";
import { Audio } from "expo-av";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Center, Text, Progress, VStack, Icon } from "native-base";
import AlphabetData from "../../Data/AlphabetData";
import ReadingComp from "../../Components/Numbers/ReadingComp";
import ListeningComp from "../../Components/Numbers/ListeningComp";
import WritingComp from "../../Components/Numbers/WritingComp";
const NumbersPracticeScreen = ({ route, navigation }) => {
  let Route = route;
  //setting practice data according to name
  if (Route.params === "Listening") {
    return <ListeningComp />;
  } else if (Route.params === "Reading") {
    return <ReadingComp />;
  } else {
    return <WritingComp />;
  }
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: "#1f233c",
  },
  Header: {
    padding: height - height + 20,
  },
  Body: {
    width: width,
    height: "auto",
  },
  title: {
    fontSize: 32,
  },
  Button: {
    justifyContent: "center",
    marginTop: 50,
    backgroundColor: "#36415f",
    width: width / 2.5,
    padding: 10,
    alignSelf: "flex-end",
    marginRight: "5%",
    borderRadius: 50,
  },
});

export default NumbersPracticeScreen;
