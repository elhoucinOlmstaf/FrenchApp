import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  BackHandler,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width, height } = Dimensions.get("window");
import { useIsFocused } from "@react-navigation/native";
import GeneralStyles from "../../styles/GeneralStyles";
const AlphabetPracticeCategory = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  // getting some data from local storage
  let [AlphabetPracticeScore, setAlphabetPracticeScore] = useState(0);
  // get data from local storage
  const getData = async () => {
    const response = await AsyncStorage.getItem("AlphabetPracticeValue");
    setAlphabetPracticeScore(response);
  };

  const backAction = () => {
    navigation.navigate("ShowScreenSections");
    return true;
  };
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  useEffect(() => {
    getData();
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, [isFocused]);

  return (
    <Animated.View style={GeneralStyles.PracticeContainer}>
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
        <View style={GeneralStyles.PracticeBoxContainer}>
          <View style={{ alignSelf: "center" }}>
            <Text style={{ color: "#fff", fontSize: 20 }}>Listening</Text>
          </View>
          <View style={{ flexDirection: "row", marginRight: 10 }}>
            <AntDesign
              name="star"
              size={40}
              color={
                AlphabetPracticeScore == 33.33 ||
                AlphabetPracticeScore == 66.66 ||
                AlphabetPracticeScore == 100
                  ? "orange"
                  : "grey"
              }
            />
            <AntDesign
              name="star"
              size={40}
              color={
                AlphabetPracticeScore == 66.66 || AlphabetPracticeScore == 100
                  ? "orange"
                  : "grey"
              }
            />
            <AntDesign
              name="star"
              size={40}
              color={AlphabetPracticeScore == 100 ? "orange" : "grey"}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
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
