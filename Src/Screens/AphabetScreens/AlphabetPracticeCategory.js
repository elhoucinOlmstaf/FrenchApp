import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Feather } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";
const { width, height } = Dimensions.get("window");
const AlphabetPracticeCategory = () => {
  const navigation = useNavigation();
  let [Part1, setPart1] = useState(0);
  const part1 = "part 1";

  // getting some data from local storage

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

  getData();
  return (
    <View
      style={{
        backgroundColor:"#1f233c",
        width: width,
        height: height,
        paddingTop: height - height + 200,
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          alignItem: "center",
          justifyContent: "center",
          alignSelf: "center",
          marginBottom: 100,
        }}
      >
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3403/3403381.png",
          }}
          style={styles.avatar}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("AlphabtePracticeSCREEN")}
      >
        <View style={styles.BoxContainer}>
          <View style={{ alignSelf: "center" }}>
            <Text style={{ color: "#fff", fontSize: 20 }}>{part1}</Text>
          </View>
          <View style={{ flexDirection: "row", marginRight: 10 }}>
            <AntDesign
              name="star"
              size={20}
              color={
                Part1 == 11.11 || Part1 == 22.66 || Part1 == 33.33
                  ? "orange"
                  : "grey"
              }
            />
            <AntDesign
              name="star"
              size={20}
              color={Part1 == 22.66 || Part1 == 33.33 ? "orange" : "grey"}
            />
            <AntDesign
              name="star"
              size={20}
              color={Part1 == 33.33 ? "orange" : "grey"}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 8,
    marginLeft: 18,
  },
  BoxContainer: {
    backgroundColor: "#36415f",
    padding: 30,
    alignItems: "center",
    alignSelf: "center",
    width: width / 1.1,
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "space-between",
  },
  avatar: {
    height: 100,
    width: 100,
  },
});

export default AlphabetPracticeCategory;
