import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AntDesign } from "@expo/vector-icons";

const PracticeScreen = () => {
  const navigation = useNavigation();
  let [Part1, setPart1] = useState(0);
  let [Part2, setPart2] = useState(0);
  let [Part3, setPart3] = useState(0);
  const part1 = "part 1";
  const part2 = "part 2";
  const part3 = "part 3";
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
    <View>
      <View style={{ marginVertical: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ShowPracticeScreen", part1)}
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
                  Part1 == 11.33 || Part1 == 22.66 || Part1 == 33.33
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
      <View style={{ marginVertical: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ShowPracticeScreen", part2)}
        >
          <View style={styles.BoxContainer}>
            <View style={{ alignSelf: "center" }}>
              <Text style={{ color: "#fff", fontSize: 20 }}>{part2}</Text>
            </View>
            <View style={{ flexDirection: "row", marginRight: 10 }}>
              <AntDesign
                name="star"
                size={20}
                color={
                  Part2 == 44.44 || Part2 == 55.55 || Part2 == 66.66
                    ? "orange"
                    : "grey"
                }
              />
              <AntDesign
                name="star"
                size={20}
                color={Part2 == 55.55 || Part2 == 66.66 ? "orange" : "grey"}
              />
              <AntDesign
                name="star"
                size={20}
                color={Part2 == 66.66 ? "orange" : "grey"}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ShowPracticeScreen", part3)}
        >
          <View style={styles.BoxContainer}>
            <View style={{ alignSelf: "center" }}>
              <Text style={{ color: "#fff", fontSize: 20 }}>{part3}</Text>
            </View>
            <View style={{ flexDirection: "row", marginRight: 10 }}>
            <AntDesign
                name="star"
                size={20}
                color={
                  Part3== 77.77 || Part3 == 88.88 || Part3 == 100
                    ? "orange"
                    : "grey"
                }
              />
              <AntDesign
                name="star"
                size={20}
                color={Part3 == 88.88 || Part3 == 100 ? "orange" : "grey"}
              />
              <AntDesign
                name="star"
                size={20}
                color={Part3 == 100 ? "orange" : "grey"}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PracticeScreen;

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 8,
    marginLeft: 18,
  },
  BoxContainer: {
    backgroundColor: "#1f233c",
    padding: 10,
    alignItems: "center",
    alignSelf: "center",
    width: width / 1.1,
    flexDirection: "row",
    marginRight: 10,
    justifyContent: "space-between",
  },
});
