import React, { useState, useEffect } from "react";
import { View, Dimensions, TouchableOpacity, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Center, Text, Image, VStack } from "native-base";
import GeneralStyles from "../../styles/GeneralStyles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
const NumbersPracticeCategory = () => {
  let navigation = useNavigation();
  let [AlphabetPracticeScore, setAlphabetPracticeScore] = useState(100);
  let Listening = "Listening";
  let Reading = "Reading";
  let Writing = "Writing";

  return (
    <SafeAreaView style={GeneralStyles.PracticeContainer}>
      <VStack space={4} alignItems="center">
        <View>
          {/* <Image
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            alt="Alternate Text"
            size="xl"
          /> */}
        </View>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("NumbersPracticeScreen", Listening)
          }
        >
          <View style={GeneralStyles.PracticeBoxContainer}>
            <View style={{ alignSelf: "center" }}>
              <Text style={{ color: "#fff", fontSize: 20 }}>{Listening}</Text>
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
        <TouchableOpacity
          onPress={() => navigation.navigate("NumbersPracticeScreen", Reading)}
        >
          <View style={GeneralStyles.PracticeBoxContainer}>
            <View style={{ alignSelf: "center" }}>
              <Text style={{ color: "#fff", fontSize: 20 }}>{Reading}</Text>
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
        <TouchableOpacity
          onPress={() => navigation.navigate("NumbersPracticeScreen", Writing)}
        >
          <View style={GeneralStyles.PracticeBoxContainer}>
            <View style={{ alignSelf: "center" }}>
              <Text style={{ color: "#fff", fontSize: 20 }}>{Writing}</Text>
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
      </VStack>
    </SafeAreaView>
  );
};

export default NumbersPracticeCategory;
const { width, height } = Dimensions.get("window");
