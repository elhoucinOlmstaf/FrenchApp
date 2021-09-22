import { Dimensions, StyleSheet, Text, View } from "react-native";

import HomeScreenHeader from "../Components/HomeScreenHeader";
import HomeScreenSections from "../Components/HomeScreenSections";
import React , {useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LocalData from "../Data/LocalData"
const HomeScreen = () => {

  return (
    <SafeAreaView>
      <View
        style={{ backgroundColor: "#1f233c", width: width, height: height }}
      >

        <HomeScreenHeader />
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
          }}
        />
        <HomeScreenSections />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  Container: {
    width: width,
    backgroundColor: "red",
    height: 30,
  },
});
