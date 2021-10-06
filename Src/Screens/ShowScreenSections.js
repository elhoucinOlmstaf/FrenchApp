import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AlphabetComp from "../Components/Alphabet/AlphabetComp";
import NumbersComp from "../Components/Numbers/NumbersComp";
import React from "react";

const ShowScreenSections = ({ route }) => {
  const passedData = route.params;
  if (passedData === "الاعداد") {
    return <NumbersComp />;
  } else {
    return <AlphabetComp />;
  }
};

export default ShowScreenSections;

const styles = StyleSheet.create({});
