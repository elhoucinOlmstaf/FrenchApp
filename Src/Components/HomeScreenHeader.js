import { Dimensions, StyleSheet, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StatusBar } from "expo-status-bar";

const HomeScreenHeader = () => {
  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor="#1f233c" style="light" />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text
            style={styles.title}
          >
            Francais
          </Text>
        </View>
        <View style={styles.starComp}>
          <Text style={styles.title}>10</Text>
          <AntDesign name="star" size={24} color="yellow" />
        </View>
      </View>
    </View>
  );
};

export default HomeScreenHeader;
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  Container: {
    width: width,
    backgroundColor: "#1f233c",
    padding:   10,
  },
  starComp: {
    flexDirection: "row",
  },
  title: {
    color: "white",
    marginRight: 10,
    fontWeight: "bold",
    fontSize: 17,
  },
});
