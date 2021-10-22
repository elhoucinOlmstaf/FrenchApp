import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import ReadingData from "../../Data/NumbersData/ReadingData";
import PracticeCompletedAnimation from "../../LottieComp/PracticeCompletedAnimation";
import { Audio } from "expo-av";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Center, Text, Progress, VStack, Icon } from "native-base";
import { useNavigation } from "@react-navigation/core";

const WritingComp = ({ route }) => {
  const navigation = useNavigation();
  let Route = route;
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
  //reste all options
  const reset = () => {
    setCureentOptionSelected(null);
    setCurrecttOption(null);
    setIsOptiomDiabled(false);
    setshowNextBtn(false);
  };

  //Checking The answer
  const CheckAnswer = async (selectedOption) => {
    const CorrectAnswer = ReadingData[QuestionIndex].CorrectOption;
    setCureentOptionSelected(selectedOption);
    setCurrecttOption(CorrectAnswer);
    setIsOptiomDiabled(true);
    setshowNextBtn(true);
    setProgress(((QuestionIndex + 1) / ReadingData.length) * 100);
    if (selectedOption == CorrectAnswer) {
      const { sound } = await Audio.Sound.createAsync(
        ReadingData[QuestionIndex ].audio
      );
      setTimeout(() => {
        Correct_Sound()
      }, 340);
      setSound(sound);
      await sound.playAsync();
    //   Correct_Sound();
      setScore(score + 1);
    } else {
      WrongAudioF();
    }
  };
  //play correct sound
  const Correct_Sound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../Audios/PracticeSounds/right_answer.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  };
  //play wrong sound
  const WrongAudioF = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../Audios/PracticeSounds/lesson_failed.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  };

  // the Next Question Button
  const NextQuestion = async () => {
    if (QuestionIndex === ReadingData.length - 1) {
      setIsPracticeCompleted(true);
    } else {
      setQuestionIndex(QuestionIndex + 1);
      reset();
    }
  };

  // unloading sounds
  useEffect(() => {
    return Sound
      ? () => {
          Sound.unloadAsync();
        }
      : undefined;
  }, [Sound]);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {IsPracticeCompleted ? (
          <View style={{ backgroundColor: "#1f233c", height: height }}>
            <Center pt="10">
              <Text color="tomato" fontSize="4xl" bold>
                مبروك
              </Text>
              <Text color="tomato" fontSize="3xl" bold>
                لقد أنهيت الأختبار
              </Text>
            </Center>
            <PracticeCompletedAnimation />
            <View
              style={{
                position: "absolute",
                bottom: 15,
                alignSelf: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "tomato",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 15,
                  borderRadius: 15,
                  width: width / 1.1,
                  alignSelf: "center",
                  marginVertical: 20,
                }}
              >
                <Text
                  style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}
                >
                  Practice XP
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <MaterialCommunityIcons
                    style={{ marginRight: 8 }}
                    name="star-four-points"
                    size={30}
                    color="yellow"
                  />
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: 18,
                    }}
                  >
                    {score}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigation.push("NumbersPracticeCategory")}
                style={{
                  backgroundColor: "skyblue",
                  flexDirection: "row",
                  justifyContent: "center",
                  padding: 15,
                  borderRadius: 15,
                  width: width / 1.1,
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}
                >
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        <View style={styles.Header}>
          <Center p="5">
            <Text color="white" fontSize="2xl" bold>
              إختر الترجمة الصحية
            </Text>
          </Center>
          <View style={{ alignItems: "center", paddingBottom: 10 }}>
            <Center style={{ borderRadius: 0 }}>
              <Text color="tomato" fontSize="4xl" bold>
                {ReadingData[QuestionIndex].name}
              </Text>
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
            data={ReadingData[QuestionIndex].Options}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  disabled={IsOptiomDiabled}
                  onPress={() => CheckAnswer(item)}
                  style={{
                    // backgroundColor: "red",
                    width: width / 1.1,
                    height: width / 5,
                    paddingBottom: 100,
                    marginTop: 10,
                    alignSelf: "center",
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#36415f",
                      height: height / 9.3,
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
                        fontSize: 27,
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
                  // fontFamily: "mummified",
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

export default WritingComp;
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
