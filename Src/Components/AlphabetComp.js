import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Audio } from "expo-av";
import AlphabetData from "../Data/AlphabetData";
// main code
const AlphabetComp = () => {
  const navigation = useNavigation();
  //navigation functions
  const MoveToPractice = () => {
    navigation.navigate("PracticeScreen");
  };
  const [sound, setSound] = React.useState();
  async function playSound(item) {
    console.log(item);
    const { sound } = await Audio.Sound.createAsync(item);
    setSound(sound);
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={{ width, height, backgroundColor: "#1f233c" }}>
      <Button title="Practice" color="orange" onPress={MoveToPractice} />
      <FlatList
        data={AlphabetData}
        numColumns={2}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: "#1f233c",
                width: width / 2,
                height: width / 3,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: 150,
                  borderWidth: 0.5,
                  borderColor: "grey",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 40,
                    fontWeight: "bold",
                    fontStyle: "italic",
                  }}
                >
                  {item.name}
                </Text>
                <View style={{ position: "absolute", bottom: 15, left: 5 }}>
                  <TouchableOpacity onPress={() => playSound(item.audio)}>
                    <AntDesign name="play" size={30} color="yellow" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default AlphabetComp;
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({});
