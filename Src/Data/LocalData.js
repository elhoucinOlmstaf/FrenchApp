import React from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const LocalData = () => {
  const storeData = async (value) => {
    try {
      //part1
      const Part1 = JSON.stringify(0);
      await AsyncStorage.setItem("part1", Part1);
      //part2
      const Part2 = JSON.stringify(0);
      await AsyncStorage.setItem("part2", Part2);
      //part3
      const Part3 = JSON.stringify(0);
      await AsyncStorage.setItem("part3", Part3);
    } catch (e) {
     console.log(e.message())
    }
  };
  storeData()
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default LocalData;
