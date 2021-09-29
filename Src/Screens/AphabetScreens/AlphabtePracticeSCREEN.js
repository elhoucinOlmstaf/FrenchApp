import React, { useState } from "react";
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
const AlphabtePracticeSCREEN = () => {
  let [QuestionIndex, setQuestionIndex] = useState(0);
  let [Sound, setSound] = useState("");
  let [score, setScore] = useState(0);
  let [showNextBtn, setshowNextBtn] = useState(false);
  let [CureentOptionSelected, setCureentOptionSelected] = useState(null);
  let [CurrecttOption, setCurrecttOption] = useState(null);
  let [IsOptiomDiabled, setIsOptiomDiabled] = useState(null);
  //check answer function
  const CheckAnswer = (selectedOption) => {
    const CorrectAnswer = AlphabetData[QuestionIndex].name;
    setCureentOptionSelected(selectedOption);
    setCurrecttOption(CorrectAnswer);
    setIsOptiomDiabled(true);
    if (selectedOption == CorrectAnswer) {
      setScore(score + 1);
      setshowNextBtn(true);
      // setQuestionIndex(QuestionIndex + 1);
    } else {
      alert("wrong");
      setshowNextBtn(true);
    }
  };

  // play audio function
  const PlayAudio = async (audio) => {
    const { sound } = await Audio.Sound.createAsync(
      AlphabetData[QuestionIndex].audio
    );
    setSound(sound);
    await sound.playAsync();
    console.log(Sound);
  };
  // Continue Button
  const ContinueButton = ()=> {
    // code goes here
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
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
        <View>
          {showNextBtn ? (
            <TouchableOpacity style={styles.Button}>
              <Text
                style={{
                  color:
                    CurrecttOption ==  CureentOptionSelected
                      ? "green"
                      :
                     "red" ,

                  alignSelf: "center",
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
    marginTop: height - height + 20,
  },
  title: {
    fontSize: 32,
  },
  Button: {
    justifyContent: "center",
    marginTop: 50,
    backgroundColor: "#1f23",
    width: width / 2.5,
    padding: 10,
    alignSelf: "flex-end",
    marginRight: "5%",
  },
});
