import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Audio } from "expo-av";
import { AntDesign } from "@expo/vector-icons";
import { Center, Text, Progress, VStack, Icon } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import AlphabetData from "../../Data/AlphabetData";
import PracticeCompletedAnimation from "../../LottieComp/PracticeCompletedAnimation";
const AlphabtePracticeSCREEN = () => {
  let [QuestionIndex, setQuestionIndex] = useState(0);
  let [Sound, setSound] = useState();
  let [PracticeSound, setPracticeSound] = useState();
  let [score, setScore] = useState(0);
  let [showNextBtn, setshowNextBtn] = useState(false);
  let [CureentOptionSelected, setCureentOptionSelected] = useState(null);
  let [CurrecttOption, setCurrecttOption] = useState(null);
  let [IsOptiomDiabled, setIsOptiomDiabled] = useState(null);
  let [IsPracticeCompleted, setIsPracticeCompleted] = useState(false);
  let [WrongAudio, setWrongAudio] = useState();
  let [RightAudio, setRightAudio] = useState();


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
    if (selectedOption == CorrectAnswer) {
      RightAudioF();
      setScore(score + 1);
    } else {
      WrongAudioF();
    }
  };

  // play audio function
  const PlayAudio = async (audio) => {
    const { sound } = await Audio.Sound.createAsync(
      AlphabetData[QuestionIndex].audio
    );
    setSound(sound);
    await sound.playAsync();
  };

  // Continue Button
  const NextQuestion = async () => {
    if (QuestionIndex === AlphabetData.length - 1) {
      setIsPracticeCompleted(true);
    } else {
      setQuestionIndex(QuestionIndex + 1);
      reset();
      const { sound } = await Audio.Sound.createAsync(
        AlphabetData[QuestionIndex + 1].audio
      );
      setSound(sound);
      await sound.playAsync();
    }
  };

  // [lay wrong answer ]
  const WrongAudioF = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../Audios/PracticeSounds/lesson_failed.mp3")
    );
    setWrongAudio(sound);
    await sound.playAsync();
  };
  const RightAudioF = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../Audios/PracticeSounds/right_answer.mp3")
    );
    setRightAudio(sound);
    await sound.playAsync();
  };


  useEffect(() => {
    return Sound
      ? () => {
          console.log("Unloading Sound");
          Sound.unloadAsync();
        }
      : undefined;
  }, [Sound]);

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
            <Text color="white" fontSize="xl" bold>
              Tap The Letter You Hear :
            </Text>
          </Center>
          <View style={{ alignItems: "center", paddingBottom: 10 }}>
            <Center
              w="120px"
              h="120px"
              bg="tomato"
              style={{ borderRadius: 80 }}
            >
              <AntDesign
                onPress={PlayAudio}
                name="caretright"
                size={90}
                color="blue"
              />
            </Center>
          </View>
          <View>
            <VStack pt="10">
              <Progress size="xl" mb={4} value={65} />
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
                        fontSize: 40,
                        fontWeight: "bold",
                        fontStyle: "italic",
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
                  fontWeight: "bold",
                  fontSize: 22,
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
