import { Dimensions, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import LottieView from "lottie-react-native";
import React, { useState, useEffect } from "react";
const { width, height } = Dimensions.get("window");
import { Center, Text } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const PracticeCompletedAnimation = (props) => {
  const navigation = useNavigation();
  let [CompleteAudio, setCompleteAudio] = useState();

  const CompletAudioF = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../Audios/PracticeSounds/lesson_complete.mp3")
    );
    setCompleteAudio(sound);
    await sound.playAsync();
  };

  const MoveBack = () => {
    navigation.push("AlphabetPracticeCategory");
  };

  useEffect(() => {
    CompletAudioF();
  }, []);
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LottieView
        style={{
          width: width / 2,
          height: height / 2,
        }}
        autoPlay
        source={require("../LottieFiles/session_complete_vikram_duo.json")}
      />
    </View>
  );
};

export default PracticeCompletedAnimation;
