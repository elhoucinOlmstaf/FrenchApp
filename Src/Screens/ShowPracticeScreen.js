import React, { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AlphabetPracticeData1 from "../Data/AlphabetPracticeData1";
import AlphabetPracticeData2 from "../Data/AlphabetPracticeData2";
import AlphabetPracticeData3 from "../Data/AlphabetPracticeData3";
const ShowPracticeScreen = ({ route }) => {
  let passedData = route.params;
  let [QuestionData, setQuestionData] = useState(AlphabetPracticeData1);
  let [CurrentQuestion, setCurrentQuestion] = useState(0);
  let [score, setScore] = useState(0);
  let [showNextBtn, setshowNextBtn] = useState(false);
  let [CureentOptionSelected, setCureentOptionSelected] = useState(null);
  let [CurrecttOption, setCurrecttOption] = useState(null);
  let [IsOptiomDiabled, setIsOptiomDiabled] = useState(null);
  let [quizeCompleted, setquizeCompleted] = useState(false);
  let [InitialValue, setInitialValue] = useState(0);
  const [Stars, setStars] = useState(0);

  //setting practice data
  const SetPracticeData = (data) => {
    if (passedData === "part 2") {
      setQuestionData(AlphabetPracticeData2);
    }
    if (passedData === "part 3") {
      setQuestionData(AlphabetPracticeData3);
    }
  };
  //reset CureentOptionSelecte ,CurrecttOption,IsOptiomDiabled,howNextBtn
  const reset = () => {
    setCureentOptionSelected(null);
    setCurrecttOption(null);
    setIsOptiomDiabled(false);
    setshowNextBtn(false);
  };
  //check selcted answer by ty the user
  const CheckAnswer = (selectedOption) => {
    let coreect_option = QuestionData[CurrentQuestion]["correctOption"];
    setCureentOptionSelected(selectedOption);
    setCurrecttOption(coreect_option);
    setIsOptiomDiabled(true);
    if (selectedOption == coreect_option) {
      setScore(score + 1);
      setshowNextBtn(true);
    } else {
      setshowNextBtn(true);
    }
  };

  //handle next question
  const NextQuestion = async () => {
    const PART1 = await AsyncStorage.getItem("Part1")
    const PART2 = await AsyncStorage.getItem("Part2")
    const PART3 = await AsyncStorage.getItem("Part3")

    if (CurrentQuestion === QuestionData.length - 1) {
      if (passedData === "part 1" &&CurrentQuestion === QuestionData.length - 1) {
        if(PART1 == 33.33){
          setScore(5)
        }else if(PART1 === 22.66){
          setScore(4)
        }else {
          if (score >= 1 && score <= 2) {
            let PartOne = JSON.stringify(11.11);
            AsyncStorage.setItem("Part1", PartOne);
          }
          if (score >= 3 && score <= 4) {
            let PartOne = JSON.stringify( 22.66);
            AsyncStorage.setItem("Part1", PartOne);
          }
          if (score === 5) {
            let PartOne = JSON.stringify( 33.33);
            AsyncStorage.setItem("Part1", PartOne);
          }
        }


      }
      if(passedData === "part 2" &&CurrentQuestion === QuestionData.length - 1){
        if(PART2 ==66.66){
          setScore(5)
        }else if(PART2 === 55.55){
          setScore(4)
        }else {
          if (score >= 1 && score <= 2) {
            let PartTwo = JSON.stringify(44.44);
            AsyncStorage.setItem("Part2", PartTwo);
          }
          if (score >= 3 && score <= 4) {
            let PartTwo = JSON.stringify(55.55);
            AsyncStorage.setItem("Part2", PartTwo);
          }
          if (score === 5) {
            let PartTwo = JSON.stringify(66.66);
            AsyncStorage.setItem("Part2", PartTwo);
        }
      }

      }
      if(passedData === "part 3" &&CurrentQuestion === QuestionData.length - 1){
        if(PART3 ==100){
          setScore(5)
        }else if(PART2 === 88.88){
          setScore(4)
        }else {
          if (score >= 1 && score <= 2) {
            let PartThree = JSON.stringify(77.77);
            AsyncStorage.setItem("Part3", PartThree);
          }
          if (score >= 3 && score <= 4) {
            let PartThree = JSON.stringify(88.88);
            AsyncStorage.setItem("Part3", PartThree);
          }
          if (score === 5) {
            let PartThree = JSON.stringify(100);
            AsyncStorage.setItem("Part3", PartThree);
        }
      }

      }
      setquizeCompleted(true);
      setCurrentQuestion(0);
    } else {
      setCurrentQuestion(CurrentQuestion + 1);
      reset();
    }
  };
  console.log(InitialValue);

  //use effect hook
  useEffect(() => {
    // fetching();
    SetPracticeData();
    return () => {
      SetPracticeData();
    };
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
        {QuestionData[CurrentQuestion].question}
      </Text>
      <ScrollView>
        <View
          style={{
            width: width,
            alignItems: "center",
            padding: 10,
          }}
        >
          {QuestionData[CurrentQuestion].options.map((option, index) => (
            <TouchableOpacity
              disabled={IsOptiomDiabled}
              onPress={() => CheckAnswer(option)}
              key={index}
              style={{
                padding: 15,
                margin: 10,
                width: width / 1.1,
                alignItems: "center",
                borderRadius: 10,
                backgroundColor:
                  option == CurrecttOption
                    ? "green"
                    : option == CureentOptionSelected
                    ? "red"
                    : "pink",
              }}
            >
              <Text
                style={{
                  color:
                    option == CurrecttOption
                      ? "white"
                      : option == CureentOptionSelected
                      ? "white"
                      : "black",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
          {/* check if the showNextBtn === true to show it. other wise hide it */}
          {showNextBtn === true ? (
            <TouchableOpacity onPress={() => NextQuestion()}>
              <Text
                style={{
                  backgroundColor: "blue",
                  paddingHorizontal: 35,
                  color: "#fff",
                  paddingVertical: 15,
                  fontSize: 19,
                }}
              >
                Next{" "}
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
        {quizeCompleted ? (
          <View>
            <View>
              <Text>Quize</Text>
              <Text>Completeed</Text>
            </View>

            <View>
              <View>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                  your scror is :
                </Text>
                <Text
                  style={{ fontSize: 18, color: "orange", fontWeight: "bold" }}
                >
                  {score}
                </Text>
              </View>
              <TouchableOpacity>
                <Text
                  style={{ fontSize: 18, color: "white", fontWeight: "bold" }}
                >
                  Play Again
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default ShowPracticeScreen;
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({});
