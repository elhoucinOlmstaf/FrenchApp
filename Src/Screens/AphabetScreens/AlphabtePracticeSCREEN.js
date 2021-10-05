import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Animated,
} from "react-native";
import AppLoading from "expo-app-loading";
import { Audio } from "expo-av";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Center, Text, Progress, VStack, Icon } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import AlphabetData from "../../Data/AlphabetData";
import PracticeCompletedAnimation from "../../LottieComp/PracticeCompletedAnimation";
import useFonts from "../../Hooks/Fonts";
const AlphabtePracticeSCREEN = ({ navigation }) => {
  let [QuestionIndex, setQuestionIndex] = useState(0);
  let [Sound, setSound] = useState();
  let [score, setScore] = useState(0);
  let [showNextBtn, setshowNextBtn] = useState(false);
  let [CureentOptionSelected, setCureentOptionSelected] = useState(null);
  let [CurrecttOption, setCurrecttOption] = useState(null);
  let [IsOptiomDiabled, setIsOptiomDiabled] = useState(null);
  let [IsPracticeCompleted, setIsPracticeCompleted] = useState(false);
  let [progress, setProgress] = useState(0);
  let [isPlaying, setIsPlaying] = useState(false);
  let [AlphabetPracticeScore, setAlphabetPracticeScore] = useState(0);
  const [IsReady, SetIsReady] = useState(false);
  //loading fonts
  const LoadFonts = async () => {
    await useFonts();
    console.log("fonts are loading");
  };

  // rest some options
  const reset = () => {
    setCureentOptionSelected(null);
    setCurrecttOption(null);
    setIsOptiomDiabled(false);
    setshowNextBtn(false);
  };

  //check answer function
  const CheckAnswer = (selectedOption) => {
    const CorrectAnswer = AlphabetData[QuestionIndex].name;
    setCureentOptionSelected(selectedOption);
    setCurrecttOption(CorrectAnswer);
    setIsOptiomDiabled(true);
    setshowNextBtn(true);
    setProgress(((QuestionIndex + 1) / AlphabetData.length) * 100);
    if (selectedOption == CorrectAnswer) {
      RightAudioF();
      setScore(score + 1);
      console.log(score);
    } else {
      WrongAudioF();
    }
  };

  // play audio function
  const PlayAudio = async (audio) => {
    setIsPlaying(true);
    try {
      const { sound } = await Audio.Sound.createAsync(
        AlphabetData[QuestionIndex].audio
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.log(error);
    }
  };

  // Continue Button
  const NextQuestion = async () => {
    if (AlphabetPracticeScore == 100) {
      setAlphabetPracticeScore(JSON.stringify(100));
    } else if (AlphabetPracticeScore == 66.66) {
      setAlphabetPracticeScore(JSON.stringify(66.66));
    }
    if (QuestionIndex === AlphabetData.length - 1) {
      setIsPracticeCompleted(true);
      if (score > 0 && score > 8) {
        let AlphabetValue = JSON.stringify(33.33);
        AsyncStorage.setItem("AlphabetPracticeValue", AlphabetValue);
      }
      if (score > 8 && score > 22) {
        let AlphabetValue = JSON.stringify(66.66);
        AsyncStorage.setItem("AlphabetPracticeValue", AlphabetValue);
      }
      if (score > 22) {
        let AlphabetValue = JSON.stringify(100);
        AsyncStorage.setItem("AlphabetPracticeValue", AlphabetValue);
      }
    } else {
      setQuestionIndex(QuestionIndex + 1);
      reset();
      const { sound } = await Audio.Sound.createAsync(
        AlphabetData[QuestionIndex + 1].Audio
      );
      setSound(sound);
      await sound.playAsync();
    }
  };

  // [lay wrong answer ]
  const WrongAudioF = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../Audios/PracticeSounds/lesson_failed.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.log("ops error");
    }
  };
  const RightAudioF = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../Audios/PracticeSounds/right_answer.mp3")
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      alert("ops something wrong please close the app and reopen it");
    }
  };

  // get data from local storage
  const getData = async () => {
    const response = await AsyncStorage.getItem("AlphabetPracticeValue");
    setAlphabetPracticeScore(response);
  };

  useEffect(() => {

    getData();
    LoadFonts();

    setTimeout(() => {

      setIsPlaying(false);
    }, 300);

    return Sound
      ? () => {
          Sound.unloadAsync();
        }
      : undefined;
  }, [Sound]);

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {IsPracticeCompleted ? (
          <View style={{ backgroundColor: "#1f233c", height: height }}>
            <PracticeCompletedAnimation score={score} />
          </View>
        ) : null}
        <View style={styles.Header}>
          <Center p="5">
            <Text
              color="white"
              fontSize="2xl"
              bold
              style={{ fontFamily: "mummified" }}
            >
              اضغط على الحرف الدي تسمعه
            </Text>
          </Center>
          <View style={{ alignItems: "center", paddingBottom: 10 }}>
            <Center
              w="120px"
              h="120px"
              bg="tomato"
              style={{ borderRadius: 80 }}
            >
              {isPlaying ? (
                <Ionicons name="pause" size={90} color="blue" />
              ) : (
                <AntDesign
                  onPress={PlayAudio}
                  name="caretright"
                  size={90}
                  color="blue"
                />
              )}
            </Center>
          </View>
          <View>
            <VStack pt="10">
              <Progress size="xl" mb={4} value={progress} />
            </VStack>
          </View>
        </View>
        <View style={styles.Body}>
          <FlatList
            data={AlphabetData[QuestionIndex].options}
            keyExtractor={(item) => item}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  disabled={IsOptiomDiabled}
                  onPress={() => CheckAnswer(item)}
                  style={{
                    // backgroundColor: "red",
                    width: width / 2,
                    height: width / 3,
                    paddingBottom: 100,
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#36415f",
                      height: height / 6.3,
                      margin: 10,
                    }}
                  >
                    <Text
                      style={{
                        color:
                          item == CurrecttOption
                            ? "green"
                            : item == CureentOptionSelected
                            ? "red"
                            : "#fff",
                        fontSize: height / 13,
                        fontWeight: "bold",
                      }}
                    >
                      {item}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={{ backgroundColor: "#1f233c" }}>
          {showNextBtn ? (
            <TouchableOpacity style={styles.Button} onPress={NextQuestion}>
              <Text
                style={{
                  color:
                    CurrecttOption == CureentOptionSelected ? "green" : "red",

                  alignSelf: "center",

                  fontSize: 22,
                  fontFamily: "mummified",
                }}
              >
                Continue
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AlphabtePracticeSCREEN;
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: "#1f233c",
  },
  Header: {
    padding: height - height + 20,
  },
  Body: {
    width: width,

    height: "auto",
  },
  title: {
    fontSize: 32,
  },
  Button: {
    justifyContent: "center",
    marginTop: 50,
    backgroundColor: "#36415f",
    width: width / 2.5,
    padding: 10,
    alignSelf: "flex-end",
    marginRight: "5%",
    borderRadius: 50,
  },
});
