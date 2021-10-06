import React, { useEffect, useRef } from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Animated,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import AlphabetData from "../../Data/AlphabetData";
// main code
const AlphabetComp = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  //navigation functions
  const MoveToPractice = () => {
    navigation.navigate("AlphabetPracticeCategory");
  };
  const [sound, setSound] = React.useState();
  async function playSound(item) {
    const { sound } = await Audio.Sound.createAsync(item);
    setSound(sound);
    await sound.playAsync();
  }
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={{ width, height, backgroundColor: "#1f233c" }}>
      <Button title="Practice" color="orange" onPress={MoveToPractice} />
      <View style={{ marginBottom: 100 }}>
        <FlatList
          data={AlphabetData}
          numColumns={2}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            return (
              <Animated.View
                style={{
                  backgroundColor: "#1f233c",
                  width: width / 2,
                  height: width / 3,
                  paddingBottom: 100,
                  opacity: fadeAnim,
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: width / 2,
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
                  <View
                    style={{
                      position: "relative",
                      left: "35%",
                      bottom: "9%",
                    }}
                  >
                    <TouchableOpacity onPress={() => playSound(item.audio)}>
                      <AntDesign name="play" size={35} color="tomato" />
                    </TouchableOpacity>
                  </View>
                </View>
              </Animated.View>
            );
          }}
        />
      </View>
    </View>
  );
};
const { width, height } = Dimensions.get("window");
export default AlphabetComp;
